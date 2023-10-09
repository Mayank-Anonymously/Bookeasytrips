import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const SlideShow = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="container slideshow-container mt-5">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="slideshow" src="/images/slideshow/bigben.jpg" />
            <Carousel.Caption>
              <h3>Big Ben, London</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slideshow" src="/images/slideshow/turkey.jpg" />
            <Carousel.Caption>
              <h3>Istanbul, Turkey</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slideshow" src="/images/slideshow/arena.jpg" />
            <Carousel.Caption>
              <h3>Rome Colesium</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default SlideShow;
