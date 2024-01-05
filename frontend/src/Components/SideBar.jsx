import React from "react";
import "../Styles/Sidebar.css";
import Logo from "../Images/logo.png";
import material from "../Images/material.png";
import dropdown from "../Images/fe_drop-down.png";
import water from "../Images/mdi_water-outline.png";
import deleteIcon from "../Images/delete.png";
import footerLogo from "../Images/Longsight 1.png";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="logoDiv">
        <div>
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="sideBarCard">
        <div className="cardHeading">
          <p>DATA-IN</p>
        </div>
        <div className="cardSubhead1">
          <img src={material} alt="material" />

          <select name="Energy">
            <option value="" className="energyType">
              Energy
            </option>
            <option value="wind">Wind</option>
            <option value="hydro">Hydro</option>
            <option value="geothermal">Geothermal</option>
            <option value="nuclear">Nuclear</option>
          </select>

          <img src={dropdown} alt="dropdown" />
        </div>
        <div className="cardSubhead2">
          <img src={water} alt="water" />

          <h2 className="desc">Water and Effluents</h2>
          <img src={dropdown} alt="dropdown" />
        </div>
      </div>

      <div className="sideBarCard">
        <div className="cardHeading">
          <p>ANALYZE</p>
        </div>
        <div className="cardSubhead1">
          <img src={material} alt="material" />

          <p className="desc">Energy</p>
        </div>
        <div className="cardSubhead2">
          <img src={deleteIcon} alt="deleteIcon" />

          <p className="desc">
            Waste <span className="betaKeyword">(βeta)</span>
          </p>
        </div>
      </div>

      <div className="helpBtn">
        <button>Open Help Centre</button>
      </div>

      <div className="poweredBy">
        <p>Powered by</p>
        <img src={footerLogo} alt="footerLogo" />
      </div>
    </div>
  );
};

export default SideBar;
