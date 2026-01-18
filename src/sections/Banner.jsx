import { motion } from "framer-motion";
import banner1 from "../assets/banner1.jpg"; // src/assets folder এ রাখবে
import FadeIn from "../components/FadeIn";

const Banner = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Animated Content */}
      <FadeIn>
      <div
        className="relative text-center text-white px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm Your Name
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
          Frontend Developer | React | Tailwind CSS | Building Modern UI
        </p>
        <a
          href="/cv.pdf"
          download
          className="btn btn-warning btn-lg shadow-lg"
        >
          Download CV
        </a>
      </div>
      </FadeIn>
    </section>
  );
};

export default Banner;
