import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselComp.css";

const CarouselComp = () => {
  return (
    <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://live.staticflickr.com/3763/8933308248_78bfeb6990_b.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://api.creativecommons.engineering/v1/thumbs/329beaaa-0f1d-4f19-873e-85adda21734a"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://api.creativecommons.engineering/v1/thumbs/772915be-7389-4d72-a13b-c2f07ff32173"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
