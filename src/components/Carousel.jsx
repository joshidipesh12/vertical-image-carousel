import React from "react";
import "../styles/carousel.css";
import images from "../data/images.json";

function Carousel() {
  return (
    <section className="carousel-container">
      {images.map((item) => (
        <div
          key={item.name}
          className="image-item"
          style={{
            backgroundImage: `url("https://picsum.photos/1024/1024?${item.name}")`,
          }}
        ></div>
      ))}
    </section>
  );
}

export default Carousel;
