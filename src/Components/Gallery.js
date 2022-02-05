import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Gallery = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.photos.map((photo, i) => {
        return (
          <Carousel.Item key={`${photo}${i}`}>
            <img className="d-block w-100" src={photo} alt={"foto"} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Gallery;
