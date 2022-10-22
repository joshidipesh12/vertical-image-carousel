import React, { useEffect, useState } from "react";
import "../styles/carousel.css";
import images from "../data/images.json";

function Carousel() {
  const [currIndex, setCurrIndex] = useState(0);

  // const prevImage = () => setCurrIndex((p) => (p - 1) % images.length);

  const nextImage = () => setCurrIndex((p) => (p + 1) % images.length);

  useEffect(() => {
    let imageTimeout = setInterval(nextImage, 7000);
    return () => clearTimeout(imageTimeout);
  }, []);

  return (
    <section className="carousel-container">
      <div
        className="image-item"
        style={{
          backgroundImage: `url("https://source.unsplash.com/512x512/?${images[currIndex].name}")`,
        }}
      >
        <div className="image-cover">
          <button className="explore-button">EXPLORE</button>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
