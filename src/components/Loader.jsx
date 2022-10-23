import "../styles/loader.css";
import { motion } from "framer-motion";

const component = () => {
  return (
    <motion.header
      initial={{ x: 0 }}
      animate={{ x: 0 }}
      exit={{ x: -200 }}
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
