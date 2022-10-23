import React, { useEffect, useState } from "react";
import "../styles/carousel.css";
import images from "../data/images.json";
import { motion, AnimatePresence } from "framer-motion";

function Carousel() {
  const [currIndex, setCurrIndex] = useState(0);

  const nextImage = () => setCurrIndex((p) => (p + 1) % images.length);

  useEffect(() => {
    let imageTimeout = setInterval(nextImage, 10000);
    return () => clearTimeout(imageTimeout);
  }, []);

  useEffect(() => {
    let img = new Image();
    img.src = images[currIndex].img;
    return () => {};
  }, [currIndex]);

  return (
    <motion.section initial={{ x: 0 }} className="carousel-container">
      <AnimatePresence mode="popLayout">
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: "0vh" }}
          exit={{ y: "-100vh" }}
          className="image-item"
          key={`${currIndex}_container`}
          style={{
            backgroundImage: `url("${images[currIndex].img}?auto=compress&cs=tinysrgb&w=300")`,
          }}
        >
          <div className="image-cover">
            <motion.h1
              className="place-quote"
              key={`${currIndex}_quote`}
              transition={{ delay: 0.5 }}
              {...textAnim}
            >
              {images[currIndex].desc}
            </motion.h1>
            <motion.h4
              className="place-name"
              key={`${currIndex}_country`}
              transition={{ delay: 0.8 }}
              {...textAnim}
            >
              {images[currIndex].name}
            </motion.h4>
            <button className="explore-button">EXPLORE</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}

const textAnim = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 30, opacity: 0 },
};

export default Carousel;
