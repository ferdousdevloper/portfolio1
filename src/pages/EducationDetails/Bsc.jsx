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
} from "react-icons/fa";
import { useEffect, useState } from "react";

// Assets
import banner from "../../assets/education/banner1.jpg";
import logo from "../../assets/education/university-logo.png";

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

const Bsc = () => {
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
                <h1 className="text-4xl font-bold">Sonargaon University</h1>
                <p className="text-gray-300 text-sm">
                  Bachelor of Science in Textile Engineering
                </p>
              </div>
            </div>

            <p className="max-w-2xl text-gray-200">
              Undergraduate academic journey focused on textile manufacturing,
              industrial operations, quality management, and research-based
              learning.
            </p>
          </div>
        </div>
      </div>

      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 py-28">
          <SectionTitle
            title="Education"
            subtitle="Bachelor of Science (BSc) in Textile Engineering"
          />

          {/* ===== Overview ===== */}
          <div className="mt-16 p-8 rounded-3xl shadow-lg border relative">
            <div className="absolute -bottom-10 right-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
            <div className="absolute -left-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
            <h3 className="text-2xl text-gray-900 font-semibold mb-4 flex items-center gap-3">
              <FaUniversity /> Academic Overview
            </h3>

            <p className="text-gray-600 leading-relaxed">
              I completed my Bachelor of Science in Textile Engineering from
              Sonargaon University, where I developed a strong foundation in
              textile manufacturing processes, yarn and fabric technology,
              quality control systems, production planning, and industrial
              management. The program emphasized both theoretical knowledge and
              hands-on practical exposure through laboratory work, industrial
              visits, and research-based projects.
            </p>
          </div>

          {/* ===== Academic Info ===== */}
          <div className="mt-12 p-8 rounded-3xl shadow-xl  grid md:grid-cols-2 gap-6 text-gray-900">
            <p className="flex items-center gap-3">
              <FaGraduationCap />
              <strong>Degree:</strong> BSc in Textile Engineering
            </p>
            <p className="flex items-center gap-3">
              <FaUniversity />
              <strong>University:</strong> Sonargaon University
            </p>
            <p className="flex items-center gap-3">
              <FaAward />
              <strong>CGPA:</strong> 2.98 / 4.00
            </p>
            <p className="flex items-center gap-3">
              <FaCalendarAlt />
              <strong>Duration:</strong> 2016 – 2020
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
                Comprehensive study of textile fibers, yarn, fabric, and dyeing
                processes
              </li>
              <li>
                Hands-on laboratory experience in spinning, dyeing, and testing
              </li>
              <li>
                Strong understanding of quality control and industrial standards
              </li>
              <li>
                Exposure to production planning and industrial engineering
                concepts
              </li>
              <li>Research-oriented learning through final year thesis work</li>
              <li>
                Participation in academic presentations and technical reports
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

            {/* Thesis */}
            <div className="relative">
              <div className="absolute -bottom-10 right-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
            <div className="absolute -left-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-3 text-gray-900">
                <FaFilePdf className="text-red-600" />
                Final Year Thesis
              </h4>

              <div className="w-full h-[600px] rounded-2xl overflow-hidden border shadow">
                <iframe
                  src={thesisPDF}
                  title="BSc Thesis"
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

export default Bsc;

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
