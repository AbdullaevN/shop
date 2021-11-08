import React from "react";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <div className="mainBlockOfPics">
      <h1 style={{marginTop: '40px', marginBottom: '80px'}}>Необычные и уникальные решения</h1>

      <div className="twoPics">
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: 'wrap' }}>
          <div className="pic1">
            <a href="#">
              <img style={{paddingBottom: '35px'}} src="https://cdn.pixabay.com/photo/2017/11/27/07/02/time-2980690__340.jpg"></img>
            </a>
          </div>

          <div className="pic2">
            <a href="#">
              <img style={{paddingBottom: '35px'}} src="https://cdn.pixabay.com/photo/2016/02/18/18/57/home-office-1207834__340.jpg"></img>
            </a>
          </div>


          <div className="pic3">
            <a href="#">
              <img src="https://cdn.pixabay.com/photo/2016/02/18/18/57/home-office-1207834__340.jpg"></img>
            </a>
          </div>

          <div className="pic4">
            <a href="#">
              <img src="https://cdn.pixabay.com/photo/2017/11/27/07/02/time-2980690__340.jpg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
