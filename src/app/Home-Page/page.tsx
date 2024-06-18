import React from "react";
import "./page.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="banner">
        <img
          src="../images/online-doctor.jpg"
          alt="Online Consultation"
          className="banner-image"
        />
        <div className="content">
          <h1>Online doctors available 24/7.</h1>
          <p>
            Doctor-AI offers convenient virtual healthcare services covering
            daily care, emergency consultations, and specialized treatments for
            skin diseases. Depending on your selected health services, your
            visit could be cost $0.
          </p>
          <ul>
            <li>🔹 Check information and diagnose diseases</li>
            <li>🔹 Urgent care</li>
            <li>🔹 Online therapy</li>
            <li>🔹 Online search</li>
            <li>🔹 Prescription refill</li>
            <li>🔹 and more... </li>
          </ul>
          <div className="buttons">
            <button className="get-started">Get started</button>
            <button className="how-it-works">How it works</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-2">
        <header>
          <h1>24-hour urgent care near you</h1>
          <p>
            Doctor-AI offers 24/7 urgent and everyday care wherever you are. Get
            matched with a top therapist or psychiatrist for your mental health
            visits. We accept most insurance, which means your visit could be
            free.
          </p>
        </header>
        <br />
        <div className="services">
          <div className="service-card">
            <h2>Everyday Care</h2>

            <ul>
              <br />
              <li>🔸 Skin care, rashes</li>
              <li>🔸 Acne</li>
              <li>🔸 Hair loss</li>
              <li>🔸 Eczema</li>
              <li>🔸 Asthma</li>
              <li>🔸 Sexual health</li>
              <li>🔸 And more...</li>
            </ul>
            <button>Everyday care</button>
          </div>
          <div className="service-card">
            <h2>Urgent Care</h2>
            <ul>
              <br />

              <li>🔸 Cold & flu</li>
              <li>🔸 COVID</li>
              <li>🔸 Sinus infections</li>
              <li>🔸 UTIs</li>
              <li>🔸 Cough & fever</li>
              <li>🔸 Yeast infections</li>
              <li>🔸 And more...</li>
            </ul>
            <button>Urgent care</button>
          </div>
          <div className="service-card">
            <h2>Online Therapy</h2>
            <ul>
              <br />

              <li>🔸 Anxiety</li>
              <li>🔸 Depression</li>
              <li>🔸 Stress</li>
              <li>🔸 Grief & loss</li>
              <li>🔸 Postpartum</li>
              <li>🔸 PTSD</li>
              <li>🔸 And more...</li>
            </ul>
            <button>Online therapy</button>
          </div>
          <div className="service-card">
            <h2>Online Psychiatry</h2>
            <ul>
              <br />

              <li>🔸 Mood disorders</li>
              <li>🔸 Psychiatric evaluations</li>
              <li>🔸 Initial diagnosis</li>
              <li>🔸 Medication management</li>
              <li>🔸 Online prescriptions</li>
              <li>🔸 And more...</li>
              <br />
            </ul>
            <button>Online psychiatry</button>
          </div>
        </div>
      </div>

      <br />
      <br />
      <hr className="horizontal-line" />
      <br />
      <br />
      <div className="title-container">
        <span className="title-text">Why Doctor-AI is the right choice?</span>
      </div>
      <br />
      <div className="event-everyday">
        <div className="event">
          <div className="event-item">
            <img
              className="event-image"
              alt="event-1"
              src="../images/regular-health.jpg"
            />
            <p className="event-text">Regular online check-ups</p>
          </div>
          <div className="event-item">
            <img
              className="event-image"
              alt="event-2"
              src="../images/video-call.jpg"
            />
            <p className="event-text">Remote doctor consultations</p>
          </div>
          <div className="event-item">
            <img
              className="event-image"
              alt="event-3"
              src="../images/prescribed-medicine.jpg"
            />
            <p className="event-text">Quick prescription issuance</p>
          </div>
          <div className="event-item">
            <img
              className="event-image"
              alt="event-4"
              src="../images/take-note.jpg"
            />
            <p className="event-text">Easy appointment scheduling</p>
          </div>
          <div className="container" style={{ marginTop: "10px" }}>
            <button className="see-more">More ≫</button>
          </div>
        </div>
        <br />
      </div>
      <br />
      <hr className="horizontal-line" />
      <br />
      <div className="title-container">
        <span className="title-text">News & Services</span>
      </div>
      <br />
      <div className="event-everyday2">
        <div className="event">
          <div className="event-item2">
            <img
              className="event-image2"
              alt="event-1"
              src="../images/explore-1.png"
            />
          </div>
          <div className="event-item2">
            <img
              className="event-image2"
              alt="event-2"
              src="../images/explore-2.png"
            />
          </div>
          <div className="event-item3">
            <img
              className="event-image3"
              alt="event-3"
              src="../images/crowded.png"
            />
            <img
              className="event-image4"
              alt="event-4"
              src="../images/explore-4.png"
            />
          </div>

          <div className="container" style={{ marginTop: "30px" }}>
            <button className="see-more">Explore more ≫</button>
          </div>
        </div>

        <br />
        <br />
        <div className="header-container">
          <div className="line left-line"></div>
          <h2 className="header-title">Services</h2>
          <div className="line right-line"></div>
        </div>

        <br />
        <br />
      </div>
      <div className="event">
        <div className="phukien-item1">
          <img
            className="phukien-image1"
            alt="event-1"
            src="../images/explore-1.png"
          />
        </div>
        <div className="phukien-item1">
          <img
            className="phukien-image2"
            alt="event-2"
            src="../images/explore-2.png"
          />
        </div>
        <div className="phukien-item1">
          <img
            className="phukien-image3"
            alt="event-3"
            src="../images/explore-4.png"
          />
        </div>
      </div>
      <br />
      <div className="content-container">
        <div className="header-container">
          <div className="line left-line"></div>
          <h2 className="header-title">Sign up for E-NewsLetter</h2>
          <div className="line right-line"></div>
        </div>
        <p className="info-text">
          Sign up for E-NewsLetter to update the latest information and offers
          from Doctor-AI.
        </p>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            margin: "0 10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "10px 20px",
            outline: "none",
          }}
        >
          <span style={{ color: "#888" }}>your-email@gmail.com</span>
        </div>
        <div
          style={{
            margin: "0 10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "10px 20px",
            outline: "none",
          }}
        >
          <span>Hot News in Viet Nam</span>
        </div>
        <button className="button-register">Sign up</button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default HomePage;
