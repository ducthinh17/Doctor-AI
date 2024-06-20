"use client";
import * as tf from "@tensorflow/tfjs";
import { useState } from "react";
import "./ModelPredictor.css"; // Assuming styles are in this CSS file

const validLabels = {
  0: "actinic keratoses and intraepithelial carcinomae",
  1: "basal cell carcinoma",
  2: "benign keratosis-like lesions",
  3: "dermatofibroma",
  4: "melanocytic nevi",
  5: "pyogenic granulomas and hemorrhage",
  6: "melanoma",
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
      .resizeBilinear([28, 28])
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
      const modelUrl = "/tfjs_model_skin_2/model.json";
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
