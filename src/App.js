import Carousel from "./components/Carousel";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel />
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
