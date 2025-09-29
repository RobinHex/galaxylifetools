import React from "react";
import "../../styles/Spinner.css";
import logo from "../../logo.svg";



const Spinner: React.FC<{ size?: number }> = ({ size = 50 }) => {
  return (
    <div className="spinner-container">
      <img
        src={logo}
        alt="Loading..."
        className="spinner"
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default Spinner;
