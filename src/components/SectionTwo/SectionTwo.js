import React from "react";
import "./SectionTwo.css";

const SectionTwo = ({id}) => {
  return (
    <div id={id} className="mainBlockOfPics">
      <h1 style={{ marginTop: "40px", marginBottom: "80px" }}>
        Необычные и уникальные решения
      </h1>

      <div className="twoPics">
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: 'wrap' }}>
          <div className="pic1">
            <a href="#">
              <img style={{paddingBottom: '35px', height: 'auto'}} src="https://assets3.insales.ru/assets/1/3687/1412711/1593593826/main_cat_1_img.jpg"></img>
              <span>Часы</span>
            </a>
          </div>

          <div className="pic2">
            <a href="#">
              <img style={{paddingBottom: '35px'}} src="https://cdn.pixabay.com/photo/2016/02/18/18/57/home-office-1207834__340.jpg"></img>
              <p>Канцелярия</p>
              <span>В каталог</span>
            </a>
          </div>

          <div className="pic3">
            <a href="#">
              <img src="https://cdn.pixabay.com/photo/2014/05/02/12/45/ceiling-lamp-335975_960_720.jpg"></img>
              <p>Лампы</p>
              <span>В каталог</span>
            </a>
          </div>

          <div className="pic4">
            <a href="#">
              <img src="https://media.istockphoto.com/photos/wooden-chair-picture-id144348183?k=20&m=144348183&s=612x612&w=0&h=EE1nfJmtHyY08LXhhkPYJuTdPfbnUHg8ZPd6qcvJAxs="></img>
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
