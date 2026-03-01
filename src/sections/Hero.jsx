import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";
import cv from "../assets/cv.pdf"

const Hero = () => {
  return (
    <section className="flex items-center md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-1 items-center mt-36 md:mt-0">
        {/* Left Content */}
        <motion.div
          className="p-5 rounded-4xl backdrop-blur-xl bg-white/60 dark:bg-gray-900/40 border border-gray-200/50 dark:border-white/10 shadow-neumorphic"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Mohammad <br />
            <span className="text-[#FFA500]">Ferdous Hossain</span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            Showroom Manager by Profession, Frontend Developer by Passion A
            Textile Engineering graduate with industry experience in knit
            concerns and retail management. In my free time, I design and
            develop responsive web interfaces as a Frontend Web Developer.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href= {cv}
              download
              className="px-6 py-3 rounded-full bg-[#FFA500] text-black font-medium hover:bg-[#FFB800] shadow-lg transition hover:shadow-[0_0_30px_#FFA500]"
            >
              Download CV
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-white text-black dark:bg-white/10 dark:text-white border border-gray-300 dark:border-white/20 font-medium hover:bg-[#FFA500] hover:text-black hover:border-[#FFA500] shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.8),inset_2px_2px_6px_rgba(0,0,0,0.08)] dark:shadow-lg transition hover:shadow-[0_0_30px_#FFA500]"
            >
              Contact →
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={heroImg}
            alt="Hero Illustration"
            className="w-72 md:w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
