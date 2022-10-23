import "../styles/loader.css";
import { motion } from "framer-motion";

const component = () => {
  return (
    <motion.header
      initial={{ translateY: "0vh" }}
      animate={{ translateY: "0vh" }}
      exit={{ translateY: "-100vh" }}
      key="loader"
      className="loader-container"
    >
      <section className="loader">
        <span></span>
        <span></span>
        <span></span>
      </section>
    </motion.header>
  );
};

export default component;
