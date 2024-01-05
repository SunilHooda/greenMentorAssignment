import React from "react";
import "../Styles/Homepage.css";
import category from "../Images/group.png";
import userPic from "../Images/Ellipse 8.png";
import dropdown from "../Images/fe_drop-down.jpg";
import bellIcon from "../Images/Vector.png";
import mark from "../Images/mark.jpg";

const HomePage = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="navCategory">
          <div>
            <img src={category} alt="" />
          </div>

          <p>Category-1</p>
        </div>

        <div className="navUser">
          <div>
            <img src={userPic} alt="" />
          </div>

          <img src={dropdown} alt="" />

          <div>
            <img src={bellIcon} alt="" />
            <p>1</p>
          </div>
        </div>
      </div>
      <div className="calender">
        <div>
          <label htmlFor="">Show Tline: </label>
          <select name="calender">
            <option value="03-2022">Mar’22 - Apr’22 | </option>
            <option value="04-2022">Apr’22 - May’22</option>
            <option value="05-2022">May’22 - Jun’22</option>
            <option value="06-2022">Jun’22 - Jul’22</option>
            <option value="07-2022">Jul’22 - Aug’22</option>
            <option value="08-2022">Aug’22 - Sep’22</option>
            <option value="09-2022">Sep’22 - Oct’22</option>
            <option value="10-2022">Oct’22 - Nov’22</option>
            <option value="11-2022">Nov’22 - Dec’22</option>
            <option value="12-2022">Dec’22 - Jan’23</option>

            <option value="01-2023">Jan’23 - Feb’23</option>
            <option value="02-2023">Feb’23 - Mar’23</option>
            <option value="03-2023">Mar’23 - Apr’23</option>
            <option value="04-2023">Apr’23 - May’23</option>
            <option value="05-2023">May’23 - Jun’23</option>
            <option value="06-2023">Jun’23 - Jul’23</option>
            <option value="07-2023">Jul’23 - Aug’23</option>
            <option value="08-2023">Aug’23 - Sep’23</option>
            <option value="09-2023">Sep’23 - Oct’23</option>
            <option value="10-2023">Oct’23 - Nov’23</option>
            <option value="11-2023">Nov’23 - Dec’23</option>
            <option value="12-2023">Dec’23 - Jan’24</option>
          </select>
          <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="dataInfo">
        <div>
          <div className="infoCard">
            <div>
              <p className="heading">
                Purchased goods and Services{" "}
                <img src={mark} alt="" className="mark" />
              </p>
              <p className="desc">contribution to Scope3</p>
            </div>

            <div className="subInfoCard colortag1 ">
              <div>
                <h4>
                  441510.9 CO<sub>2</sub>
                </h4>
              </div>
              <div>
                <p className="tags">25%YOY ↑</p>
              </div>
            </div>
          </div>

          <div className="infoCard">
            <p className="heading">
              Purchased goods and Services to revenue ratio{" "}
              <img src={mark} alt="" className="mark" />
            </p>

            <div className="subInfoCard colortag2">
              <div>
                <h4>
                  323586.2 CO<sub>2</sub>e
                </h4>
              </div>
              <div>
                <p className="tags2">24%YOY ↓</p>
              </div>
            </div>
          </div>

          <div className="infoCard">
            <div>
              <p className="heading">
                Category-1
                <img src={mark} alt="" className="mark" />
              </p>
              <p className="desc">contribution to Scope3</p>
            </div>

            <div className="subInfoCard colortag3 ">
              <div>
                <h4>
                  323586.2 CO<sub>2</sub>e
                </h4>
              </div>
              <div>
                <p className="tags3">24%YOY ↓</p>
              </div>
            </div>
          </div>

          <div className="infoCard">
            <p className="supplierTxt">Total number of reached suppliers</p>
            <p className="count">143</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
