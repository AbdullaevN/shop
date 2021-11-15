import React from "react";
import "./SectionTwo.css";

const SectionTwo = ({id}) => {
  return (
    <div id={id} className="mainBlockOfPics">
      <h1 style={{ marginTop: "40px", marginBottom: "80px" }}>
        Необычные и уникальные украшения
      </h1>

      <div className="twoPics">
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: 'wrap' }}>
          <div className="pic1">
            <a href="#">
              <img style={{paddingBottom: '35px', height: 'auto'}} src="https://light-catchers.ru/wp-content/uploads/2019/06/MYUZAF_180205_06.jpg"></img>
              <span>Часы</span>
            </a>
          </div>

          <div className="pic2">
            <a href="#">
              <img style={{paddingBottom: '35px'}} src="https://light-catchers.ru/wp-content/uploads/2019/05/R2022-R072264.jpg"></img>
              <p>Канцелярия</p>
              <span>В каталог</span>
            </a>
          </div>

          <div className="pic3">
            <a href="#">
              <img src="https://light-catchers.ru/wp-content/uploads/2019/06/R2022-GEMERALD-1.jpg"></img>
              <p>Лампы</p>
              <span>В каталог</span>
            </a>
          </div>

          <div className="pic4">
            <a href="#">
              <img src="https://light-catchers.ru/wp-content/uploads/2019/06/MYUZAF_180205_01.jpg"></img>
              <span>Стулья</span>
            </a>
          </div>
        </div>
      </div>

      {/* <div className=" container ddiv">
        <div className=" col-4">
          <img src="https://cdn.pixabay.com/photo/2017/11/27/07/02/time-2980690__340.jpg"></img>
        </div>
        <div className="col-8">
          <div className="col-6">
            <img src="https://cdn.pixabay.com/photo/2017/11/27/07/02/time-2980690__340.jpg"></img>
          </div>
          <div className="d-inline-block col-6">
            <span >qerghrtgtrgr</span>
          </div>
        </div>
  </div>*/}
    </div> 
  );
};

export default SectionTwo;
