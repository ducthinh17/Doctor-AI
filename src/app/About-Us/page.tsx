import React from "react";
import "./page.css";

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="banner">
          <img
            src="../images/explore-2.png"
            alt="Online Consultation"
            className="banner-image"
          />
          <div className="content">
            <h1>About Us</h1>
            <p>
              Connect face to face with a doctor, psychiatrist or psychologist
              through video on your phone, tablet or computer.
              <br />
              <br />
              Doctor AI Included Health works with or without insurance and is
              available at reduced rates through many major health plans and
              large employers. You’ll always see your cost upfront and won’t
              receive a surprise bill after your visit.
            </p>
          </div>
        </div>
      </div>
      <img
        src="../images/About-2.png"
        alt="Online Consultation"
        className="step-image"
      />
    </div>
  );
};

export default AboutUs;
