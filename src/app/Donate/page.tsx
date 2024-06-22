import React, { Suspense } from "react";

const Donate: React.FC = () => {
  return (
    <div>
      <div
        className="chienbinh"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          paddingTop: "100px",
        }}
      >
        <img
          className="chienbinh"
          alt="chien_binh"
          src="../images/chienbinh.png"
          style={{
            width: "80%",
            height: "380px",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <Suspense fallback={<div>Loading form...</div>}>
          <iframe
            className="form"
            title="Donation Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLScz_cduoWGxFwQIuiKTKtRbZQIUyoSV8bADiNGk46hUQmvtYw/viewform?embedded=true"
            width="1040"
            height="5521"
          >
            Loading…
          </iframe>
        </Suspense>
      </div>
    </div>
  );
};

export default Donate;
