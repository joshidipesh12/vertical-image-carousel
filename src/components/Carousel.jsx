import React, { useEffect, useState } from "react";
import "../styles/carousel.css";
import images from "../data/images.json";

function Carousel() {
  const [currIndex, setCurrIndex] = useState(0);

  // const prevImage = () => setCurrIndex(currIndex - 1);
  const nextImage = () => setCurrIndex((p) => (p + 1) % images.length);

  useEffect(() => {
    const imageTimeout = setInterval(nextImage, 7000);
    return () => clearTimeout(imageTimeout);
  }, []);

  return (
    <section className="carousel-container">
      <div
        className="image-item"
        style={{
          backgroundImage: `url("https://source.unsplash.com/1024x1024/?${images[currIndex].name}")`,
        }}
      >
        <div className="image-cover"></div>
      </div>
    </section>
  );
}

export default Carousel;
