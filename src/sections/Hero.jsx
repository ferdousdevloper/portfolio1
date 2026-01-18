import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-1 items-center ">
        {/* Left Content */}
        <motion.div
          className="p-5 rounded-4xl backdrop-blur-xl "
          style={{
            boxShadow: "-5px -5px 15px white, 5px 5px 15px rgba(0,0,0,0.5)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Mohammad <br />
            <span className="text-black">Ferdous Hossain</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
            Showroom Manager by Profession, Frontend Developer by Passion A
            Textile Engineering graduate with industry experience in knit
            concerns and retail management. In my free time, I design and
            develop responsive web interfaces as a Frontend Web Developer.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-full bg-black text-white font-medium hover:text-black  shadow-lg transition  hover:shadow-[0_0_30px_#FFA500] hover:bg-[#FFA500]"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white text-black font-medium  hover:text-white shadow-lg  transition hover:shadow-[0_0_30px_#FFA500] hover:bg-[#FFA500]"
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
