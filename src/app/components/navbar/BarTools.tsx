import React from "react";
import "./BarTools.css";

const BarTools = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="/Home-Page">Home</a>
        </li>
        <li>
          <a href="/Services-Eyes">Eyes</a>
        </li>
        <li>
          <a href="/Services-Skins">Skins</a>
        </li>
        <li>
          <a href="/Guild">Guild</a>
        </li>
        <li>
          <a href="/About-Us">About Us</a>
        </li>
        <li>
          <a href="/Donate">Survey</a>
        </li>
      </ul>
    </nav>
  );
};

export default BarTools;
