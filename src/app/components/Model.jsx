"use client";
import * as tf from "@tensorflow/tfjs";
import { useState } from "react";
import "./ModelPredictor.css"; // Assuming styles are in this CSS file

const validLabels = {
  0: "Age",
  1: "Cataract",
  2: "Diabetes",
  3: "Glaucoma",
  4: "Hypertension",
  5: "Myopia",
  6: "Normal",
  7: "Other",
  8: "Invalid Image",
};

const ModelPredictor = () => {
  const [imagePath, setImagePath] = useState(null);
  const [predictionResult, setPredictionResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imageDisplay, setImageDisplay] = useState(null);

  const loadImageFromPublic = async (imagePath) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imagePath;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  };

  const preprocessImage = (img) => {
    return tf.browser
      .fromPixels(img)
      .resizeBilinear([224, 224])
      .toFloat()
      .expandDims(0);
  };

  const predictImage = async () => {
    if (!imagePath) {
      setError("No image selected for prediction.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const modelUrl = "/tfjs_model/model_after.json";
      const loadedModel = await tf.loadLayersModel(modelUrl);
      const img = await loadImageFromPublic(imagePath);
      const preprocessedImage = preprocessImage(img);
      const prediction = loadedModel.predict(preprocessedImage);
      const predictedClassIdx = tf.argMax(prediction, 1).dataSync()[0];
      const predictedLabel = validLabels[predictedClassIdx];
      const highestAccuracy = prediction
        .dataSync()
        .reduce((a, b) => Math.max(a, b), 0);

      setPredictionResult(
        `Prediction: ${predictedLabel} - Accuracy: ${highestAccuracy.toFixed(
          2
        )}`
      );
    } catch (error) {
      console.error("Prediction error:", error.message);
      setError("Prediction error: " + error.message);
    }
    setLoading(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePath(imageUrl);
      setImageDisplay(imageUrl); // Set image for display
      setPredictionResult("");
      setError("");
    }
  };

  return (
    <div className="model-predictor-container">
      <h1>Image Prediction Model</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={predictImage} disabled={loading}>
        Predict
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {imageDisplay && (
        <img
          src={imageDisplay}
          alt="Uploaded Preview"
          className="uploaded-image"
        />
      )}
      {predictionResult && (
        <div className="prediction-result">{predictionResult}</div>
      )}
    </div>
  );
};

export default ModelPredictor;
