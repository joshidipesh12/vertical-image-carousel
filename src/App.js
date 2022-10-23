import Carousel from "./components/Carousel";
import "./styles/App.css";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import images from "./data/images.json";

function App() {
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    let img = new Image();
    img.addEventListener("load", () => setLoadingImage(false));
    img.src = images[0].img;
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <AnimatePresence mode="popLayout">
          {loadingImage ? <Loader /> : <Carousel />}
        </AnimatePresence>
      </header>
    </div>
  );
}

// const loadImages = async (images = []) => {
//   const loadImage = async (imageUrl) => {
//     let img = new Image();
//     return new Promise((resolve, reject) => {
//       img.onload = async () => resolve(true);
//       img.src = imageUrl;
//     });
//   };
//   images.map(async (item) => {
//     await loadImage(item.img);
//   });
// };

export default App;
