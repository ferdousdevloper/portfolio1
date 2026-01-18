import SectionTitle from "../../components/SectionTitle";
import FadeIn from "../../components/FadeIn";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaCalendarAlt,
  FaGraduationCap,
  FaFilePdf,
  FaBook,
  FaAward,
  FaSchool,
} from "react-icons/fa";
import { useEffect, useState } from "react";

// Assets
import banner from "../../assets/education/banner1.jpg";
import logo from "../../assets/education/ssc-logo.png";

// Gallery Images
import img1 from "../../assets/education/bsc/gallery1.jpg";
import img2 from "../../assets/education/bsc/gallery2.jpg";
import img3 from "../../assets/education/bsc/gallery3.jpg";
import img4 from "../../assets/education/bsc/gallery4.jpg";

// PDF Files
import certificatePDF from "../../assets/pdfs/bsc-certificate.pdf";
import transcriptPDF from "../../assets/pdfs/bsc-transcript.pdf";
import thesisPDF from "../../assets/pdfs/bsc-thesis.pdf";

const images = [img1, img2, img3, img4];

const Ssc = () => {
  return (
    <section className="">
      {/* ===== Banner ===== */}
      <div className="relative h-[65vh]">
        <img src={banner} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <div className="flex items-center gap-5 mb-6">
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <img src={logo} className="w-20 h-20 object-contain" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Delpara High School</h1>
                <p className="text-gray-300 text-sm">
                  Secondary School Certificate (SSC)
                </p>
              </div>
            </div>

            <p className="max-w-2xl text-gray-200">
              Foundational academic journey focused on science, mathematics,
              and analytical thinking that laid the groundwork for my
              engineering education.
            </p>
          </div>
        </div>
      </div>

      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 py-28">
          <SectionTitle
            title="Education"
            subtitle="Diploma in Textile Engineering"
          />

          {/* ===== Overview ===== */}
          <div className="mt-16 p-8 rounded-3xl shadow-lg border relative">
            <div className="absolute -bottom-10 right-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
            <div className="absolute -left-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
            <h3 className="text-2xl text-gray-900 font-semibold mb-4 flex items-center gap-3">
              <FaSchool /> Academic Overview
            </h3>

            <p className="text-gray-600 leading-relaxed">
              I completed my Secondary School Certificate (SSC) in the Science
              group, where I developed a strong academic foundation in core
              subjects such as Mathematics, Physics, Chemistry, and General
              Science. This phase of education strengthened my problem-solving
              abilities, logical reasoning, and analytical mindset. The rigorous
              curriculum nurtured my interest in engineering and technology,
              ultimately guiding me toward pursuing higher studies in textile
              engineering.
            </p>
          </div>

          {/* ===== Academic Info ===== */}
          <div className="mt-12 p-8 rounded-3xl shadow-xl  grid md:grid-cols-2 gap-6 text-gray-900">
            <p className="flex items-center gap-3">
              <FaGraduationCap />
              <strong>Degree:</strong> Secondary School Certificate (SSC)
            </p>
            <p className="flex items-center gap-3">
              <FaUniversity />
              <strong>Board:</strong> Bangladesh Technical Education Board (BTEB)
            </p>
            <p className="flex items-center gap-3">
              <FaAward />
              <strong>GPA:</strong> 4.69 / 5.00
            </p>
            <p className="flex items-center gap-3">
              <FaCalendarAlt />
              <strong>Passing Year:</strong> 2013
            </p>
          </div>

          {/* ===== Academic Highlights ===== */}
          <div className="mt-12  p-8 rounded-3xl shadow-lg border relative">
            <div className="absolute -bottom-10 left-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
            <div className="absolute -right-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <FaBook /> Academic Highlights
            </h3>

            <ul className="grid md:grid-cols-2 list-disc list-inside gap-4 text-gray-600 leading-relaxed">
              <li>
                Strong foundation in Mathematics, Physics, and Chemistry
              </li>
              <li>
                Development of analytical thinking and logical reasoning skills
              </li>
              <li>
                Exposure to basic scientific experiments and laboratory work
              </li>
              <li>
                Emphasis on discipline, time management, and academic consistency
              </li>
              <li>
                Preparation for technical and engineering-focused higher studies
              </li>
              <li>
                Active participation in school-level academic activities
              </li>
            </ul>
          </div>
          {/* ===== Gallery Slider ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Campus & Academic Gallery
            </h3>

            <CoverflowSlider images={images} />
          </motion.div>

          {/* ===== Documents ===== */}
          {/* ===== Academic Documents (Inline PDF View) ===== */}
          <div className="mt-12  p-8 rounded-3xl shadow-xl border">
            <h3 className="text-2xl font-semibold text-gray-900 mb-10">
              Academic Documents
            </h3>

            {/* Certificate */}
            <div className="mb-16 relative">
              <div className="absolute -bottom-10 right-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
              <div className="absolute -left-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-3 text-gray-900">
                <FaFilePdf className="text-red-600" />
                Degree Certificate
              </h4>

              <div className="w-full h-[500px] rounded-2xl overflow-hidden border shadow">
                <iframe
                  src={certificatePDF}
                  title="BSc Certificate"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Transcript */}
            <div className="mb-16 relative">
              <div className="absolute -bottom-10 right-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
              <div className="absolute -left-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-3 text-gray-900">
                <FaFilePdf className="text-red-600" />
                Academic Transcript
              </h4>

              <div className="w-full h-[500px] rounded-2xl overflow-hidden border shadow">
                <iframe
                  src={transcriptPDF}
                  title="BSc Transcript"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Ssc;

/* ===== Coverflow Slider ===== */
const CoverflowSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="relative flex items-center justify-center h-[420px] md:h-[520px]">
        {images.map((img, i) => {
          const position =
            i === index
              ? "center"
              : i === (index - 1 + images.length) % images.length
                ? "left"
                : i === (index + 1) % images.length
                  ? "right"
                  : "hidden";

          return (
            <motion.div
              key={i}
              animate={position}
              variants={{
                center: { scale: 1, opacity: 1, x: 0, zIndex: 20 },
                left: { scale: 0.85, opacity: 0.5, x: "-55%", zIndex: 10 },
                right: { scale: 0.85, opacity: 0.5, x: "55%", zIndex: 10 },
                hidden: { scale: 0.7, opacity: 0, zIndex: 0 },
              }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute w-[75%] md:w-[60%] h-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={img}
                alt="Education Gallery"
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
