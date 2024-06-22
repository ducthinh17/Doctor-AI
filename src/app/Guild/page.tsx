import React, { Suspense } from "react";
import "./page.css";

const GUILD: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="container">
          <div className="banner">
            <img
              src="/images/explore-4.png"
              alt="Online Consultation"
              className="banner-image"
            />
            <div className="content">
              <h1>How does Doctor-AI work?</h1>
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
          src="/images/step.png"
          alt="Online Consultation"
          className="step-image"
        />
      </div>
    </Suspense>
  );
};

export default GUILD;
