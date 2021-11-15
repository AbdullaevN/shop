import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselComp.css";
import slide1 from "./photos/1.jpg";
import slide2 from "./photos/2.jpg";
import slide3 from "./photos/img4k.jpg";
import slide4 from "./photos/img4k1.jpg";
import slide5 from "./photos/7.jpg";
import Vid from "./photos/vid.gif";

const CarouselComp = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={Vid}
            alt="First slide"
          ></img>

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={slide3}
            alt="Second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={slide4} alt="Third slide" />

          <Carousel.Caption>


          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
