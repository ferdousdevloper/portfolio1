import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import bscImg from "../assets/education/bsc.jpg"; // add your image
import diplomaImg from "../assets/education/diploma.jpg"; // add your image
import { Link } from "react-router-dom";

const EducationSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 flex justify-center items-center gap-4">
          <FaGraduationCap className="text-indigo-600" />
          Education
        </h2>
        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          A strong academic journey that shaped my technical expertise,
          professional discipline, and leadership mindset.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-indigo-200"></div>

        {/* Item 1 */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* Content */}
          <div
            className="rounded-2xl p-8 shadow-xl  w-full backdrop-blur-xl border md:text-right"
            style={{
              boxShadow: "-5px -5px 15px white, 5px 5px 15px rgba(0,0,0,0.5)",
            }}
          >
            <div className="absolute -bottom-10 right-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
            <div className="absolute -left-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
            <span className="text-indigo-600 font-semibold">2018 – 2022</span>
            <h3 className="text-2xl font-semibold text-gray-900 mt-2">
              Bachelor of Science in Textile Engineering
            </h3>
            <p className="text-gray-600 mt-2">Sonargaon University</p>
            <p className="text-gray-600 text-sm">Mohakhali, Dhaka</p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Studied textile manufacturing, yarn processing, quality control,
              industrial engineering, and supply chain fundamentals with strong
              emphasis on practical implementation.
            </p>
            <div className="text-center mt-6">
              <Link to="/education/bsc" className=" px-6 py-3 rounded-full bg-white text-black font-medium  hover:text-white shadow-lg  transition hover:shadow-[0_0_30px_#FFA500] hover:bg-[#FFA500]">
              View Details →
            </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={bscImg}
              alt="BSc in Textile Engineering"
              className="rounded-3xl shadow-2xl object-cover h-72 w-full"
            />
          </div>

          {/* Dot */}
          <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-indigo-600 rounded-full"></div>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="relative md:order-1 rounded-2xl p-8 shadow-xl  w-full backdrop-blur-xl border md:text-left"
            style={{
              boxShadow: "-5px -5px 15px white, 5px 5px 15px rgba(0,0,0,0.5)",
            }}>
            <div className="absolute -bottom-10 right-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
            <div className="absolute -left-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
            <span className="text-indigo-600 font-semibold">2013 – 2018</span>
            <h3 className="text-2xl font-semibold text-gray-900 mt-2">
              Diploma in Textile Engineering
            </h3>
            <p className="text-gray-600 mt-2">
              Science & Engineering Institute
            </p>
            <p className="text-gray-600 text-sm">
             Sanarpar, Narayanganj, Dhaka
            </p>
            <p className="text-gray-600 text-sm">
              Bangladesh Technical Education Board (BTEB)
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Developed strong hands-on experience in spinning, dyeing,
              production planning, fabric inspection, and industrial workflow,
              laying the foundation of my textile career.
            </p>

            <div className="text-center mt-6">
              <Link  to="/education/diploma" className="px-6 py-3 rounded-full bg-white text-black font-medium  hover:text-white shadow-lg  transition hover:shadow-[0_0_30px_#FFA500] hover:bg-[#FFA500]">
              View Details →
            </Link>
            </div>
          </div>
          {/* Image */}
          <div>
            <img
              src={diplomaImg}
              alt="Diploma in Textile Engineering"
              className="rounded-3xl shadow-2xl object-cover h-72 w-full"
            />
          </div>

          {/* Dot */}
          <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-indigo-600 rounded-full"></div>
        </motion.div>
        {/* Item 3 */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mt-24"
        >
          {/* Content */}
          <div
            className="rounded-2xl p-8 shadow-xl  w-full backdrop-blur-xl border md:text-right"
            style={{
              boxShadow: "-5px -5px 15px white, 5px 5px 15px rgba(0,0,0,0.5)",
            }}
          >
            <div className="absolute -bottom-10 right-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
            <div className="absolute -left-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
            <span className="text-indigo-600 font-semibold">2012 – 2013</span>
            <h3 className="text-2xl font-semibold text-gray-900 mt-2">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-gray-600 mt-2">Delpara High School</p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The journey culminated in the SSC Examination, the first major public exam of our lives. Standing outside the exam hall with an admit card in hand, there was a mix of nervousness and pride. It wasn't just about the marks; it was about the discipline learned within the walls of Delpara High School.
            </p>
            <div className="text-center mt-6">
              <Link to="/education/ssc" className=" px-6 py-3 rounded-full bg-white text-black font-medium  hover:text-white shadow-lg  transition hover:shadow-[0_0_30px_#FFA500] hover:bg-[#FFA500]">
              View Details →
            </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={bscImg}
              alt="Secondary School Certificate (SSC)"
              className="rounded-3xl shadow-2xl object-cover h-72 w-full"
            />
          </div>

          {/* Dot */}
          <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-indigo-600 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
