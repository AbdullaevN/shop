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
    <div className='caruselka'>
      <Carousel fade>
        <Carousel.Item>
          <hr />
          <img className="d-block" src={Vid} alt="First slide"></img>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <hr />
          <img style={{objectFit: 'cover'}} className="d-block" src={slide3} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <hr />
          <img style={{objectFit: 'cover'}} className="d-block" src={slide4} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
