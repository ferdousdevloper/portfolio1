import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bscImg from "../assets/education/bsc.jpg";
import diplomaImg from "../assets/education/diploma.jpg";
import sscImg from "../assets/education/ssc.jpg";

const EducationSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold flex justify-center items-center gap-3 text-gray-900 dark:text-white">
          <FaGraduationCap className="text-indigo-600 dark:text-[#FFA500]" />
          Education
        </h2>
        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A strong academic journey that shaped my technical expertise and
          professional discipline.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-indigo-200 dark:bg-white/20" />

        {/* ===== ITEM ===== */}
        {[
          {
            year: "2018 – 2021",
            title: "Bachelor of Science in Textile Engineering",
            institute: "Sonargaon University",
            location: "Mohakhali, Dhaka",
            desc: "Studied textile manufacturing, yarn processing, quality control, industrial engineering, and supply chain fundamentals.",
            img: bscImg,
            link: "/education/bsc",
            reverse: false,
          },
          {
            year: "2013 – 2017",
            title: "Diploma in Textile Engineering",
            institute: "Science & Engineering Institute",
            location: "Sanarpar, Narayanganj, Dhaka",
            desc: "Hands-on experience in spinning, dyeing, production planning, fabric inspection, and industrial workflow.",
            img: diplomaImg,
            link: "/education/diploma",
            reverse: true,
          },
          {
            year: "2013",
            title: "Secondary School Certificate (SSC)",
            institute: "Delpara High School",
            location: "",
            desc: "The first major public examination that built discipline, confidence, and academic foundation.",
            img: sscImg,
            link: "/education/ssc",
            reverse: false,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: item.reverse ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`relative grid md:grid-cols-2 gap-10 items-center mb-24 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 dark:bg-[#FFA500] rounded-full" />

            {/* Content */}
            <div
              className={`rounded-2xl p-6 sm:p-8 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 bg-white/60 dark:bg-gray-900/40 shadow-neumorphic ${
                item.reverse ? "md:order-1 md:text-left" : "md:text-right"
              }`}
            >
              <span className="text-indigo-600 dark:text-[#FFA500] font-semibold">
                {item.year}
              </span>
              <h3 className="text-xl text-gray-900 dark:text-white sm:text-2xl font-semibold mt-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{item.institute}</p>
              {item.location && (
                <p className="text-gray-500 text-sm">{item.location}</p>
              )}
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-6">
                <Link
                  to={item.link}
                  className="inline-block px-6 py-3 rounded-full bg-white dark:bg-[#FFA500] text-black font-medium shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.8),inset_2px_2px_6px_rgba(0,0,0,0.08)] dark:shadow-lg transition hover:bg-[#FFA500] dark:hover:bg-[#FFB800] hover:shadow-[0_0_30px_#FFA500]"
                >
                  View Details →
                </Link>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="rounded-3xl shadow-2xl object-cover h-56 sm:h-64 md:h-72 w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
