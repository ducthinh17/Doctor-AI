import React from "react";

const Donate: React.FC = () => {
  return (
    <div>
      <div
        className="chienbinh"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img
          className="chienbinh"
          alt="chien_binh"
          src="../images/chienbinh.png"
          style={{
            width: "80%",
            height: "380px",
            paddingTop: "100px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          className="form"
          title="Donation Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScz_cduoWGxFwQIuiKTKtRbZQIUyoSV8bADiNGk46hUQmvtYw/viewform?embedded=true"
          width="1040"
          height="5521"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Donate;
