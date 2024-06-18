import React from "react";
import "./Footer.css";

// Footer component
const Footer = () => {
  return (
    <div className="back-ground">
      <div className="footer-content">
        <div className="column1">
          <img
            src="/images/logo.png"
            alt="EGGO"
            style={{ width: "130px", height: "40px" }}
          />
          <p>
            Doctor-AI is a cohesive, healing product that uplifts spirits and
            safeguards families, communities, and individuals, aiming for
            communal health development. Designed to provide a quick, effective
            healthcare experience, Doctor-AI is the perfect choice to explore
            new horizons and shine brighter together.
          </p>
          
        </div>
        <div className="column4">
          <br />
          <br />
          <div>
            <p className="heading" style={{ marginTop: "5px" }}>
              Following Us:
            </p>

            <div>
              <div className="icon-div">
                <a
                  className="hover:opacity-50 transition duration-500 flex items-center"
                  href="https://facebook.com/Eggo"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: "25px", color: "#8DC4F0" }}>
                    Facebook
                  </span>
                </a>
              </div>

              <div className="icon-div">
                <a
                  className="hover:opacity-50 transition duration-500 flex items-center"
                  href="https://Youtube.com/Eggo"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "40px",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: "25px", color: "#8DC4F0" }}>
                    Youtube
                  </span>
                </a>
              </div>

              <div className="icon-div">
                <a
                  className="hover:opacity-50 transition duration-500 flex items-center"
                  href="mailto:igniterteam@gmail.com.vn"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "30px",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: "25px", color: "#8DC4F0" }}>
                    Gmail
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column2">
          <br />
          <br />
          <p className="heading"> About Doctor-AI:</p>
          <p> How to make an appointment with a doctor? </p>
          <p> Look up retinal diseases </p>
          <p>Look up skin diseases</p>
          <p> Diagnose diseases online </p>
          <p>Q&A for AI assistant</p>
        </div>
        <div className="column3">
          <br />
          <br />
          <p className="heading">Charity campaigns:</p>
          <ul>
            {/* List of useful information */}
            <li>Charitable donation</li>
            <li>Eyes & Heart surgery fund</li>
          </ul>
          <div>
            <p className="heading">Contact: </p>
            <p>
              - Address: ABC Office, International University, Vietnam National
              University, City. HCM
            </p>
            <p>- Phone number: 0987654321</p>
          </div>
        </div>
      </div>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 DoctorAI - Ignite the Night, Together We Shine!
      </footer>
    </div>
  );
};

export default Footer;
