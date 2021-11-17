import React from "react";
import "./SectionTwo.css";

const SectionTwo = ({ id }) => {
  return (
    <div id={id} className="mainBlockOfPics">
      <h1 style={{ marginTop: "40px", marginBottom: "80px" }}>
        Unusual and unique jewelry
      </h1>

      <div className="twoPics">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div className="pic1">
            <a href="#">
              <img
                style={{ paddingBottom: "35px", height: "auto" }}
                src="https://light-catchers.ru/wp-content/uploads/2019/06/MYUZAF_180205_06.jpg"
              ></img>
              <span>great</span>
            </a>
          </div>

          <div className="pic2">
            <a href="#">
              <img
                style={{ paddingBottom: "35px" }}
                src="https://images.pexels.com/photos/5370703/pexels-photo-5370703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              ></img>
              <span>unique</span>
            </a>
          </div>

          <div className="pic3">
            <a href="#">
              <img src="https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></img>
              <span>special</span>
            </a>
          </div>

          <div className="pic4">
            <a href="#">
              <img src="https://images.pexels.com/photos/3266703/pexels-photo-3266703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
              <span>gorgeous</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
