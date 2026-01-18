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
import logo from "../../assets/education/diploma-logo.jpg";

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

const Diploma = () => {
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
                <h1 className="text-4xl font-bold">Science & Engineering Institute</h1>
                <p className="text-gray-300 text-sm">
                  Diploma in Textile Engineering
                </p>
              </div>
            </div>

            <p className="max-w-2xl text-gray-200">
              Diploma journey focused on textile manufacturing,
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
            subtitle="Diploma in Textile Engineering"
          />

          {/* ===== Overview ===== */}
          <div className="mt-16 p-8 rounded-3xl shadow-lg border relative">
            <div className="absolute -bottom-10 right-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
            <div className="absolute -left-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
            <h3 className="text-2xl text-gray-900 font-semibold mb-4 flex items-center gap-3">
              <FaUniversity /> Academic Overview
            </h3>

            <p className="text-gray-600 leading-relaxed">
              During my four-year academic and practical tenure at the Science &
              Engineering Institute, I undertook an intensive study of the
              textile manufacturing lifecycle under the Bangladesh Technical
              Education Board (BTEB) curriculum. I translated theoretical
              principles into practical expertise by engaging directly with
              industrial-grade machinery and processes. My training focused
              heavily on the mechanics of spinning and the chemical complexities
              of dyeing and finishing. Furthermore, I gained a strategic
              understanding of production planning and control (PPC), learning
              how to streamline industrial workflows to maximize efficiency. By
              mastering fabric inspection and quality assurance protocols, I
              built a rigorous technical foundation that has become the
              cornerstone of my professional career in the textile sector.
            </p>
          </div>

          {/* ===== Academic Info ===== */}
          <div className="mt-12 p-8 rounded-3xl shadow-xl  grid md:grid-cols-2 gap-6 text-gray-900">
            <p className="flex items-center gap-3">
              <FaGraduationCap />
              <strong>Degree:</strong> Diploma in Textile Engineering
            </p>
            <p className="flex items-center gap-3">
              <FaUniversity />
              <strong>Institute:</strong> Science & Engineering Institute
            </p>
            <p className="flex items-center gap-3">
              <FaAward />
              <strong>CGPA:</strong> 3.23 / 4.00
            </p>
            <p className="flex items-center gap-3">
              <FaCalendarAlt />
              <strong>Duration:</strong> 2013 – 2018
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
                <strong>Yarn Manufacturing Technology:</strong> Comprehensive
                study of the spinning process, including fiber analysis,
                blow-room operations, and ring frame mechanics for high-quality
                yarn production.
              </li>
              <li>
                <strong>Advanced Wet Processing:</strong> Hands-on expertise in
                textile chemistry, focusing on pretreatment, dyeing cycles
                (Reactive, Vat, Disperse), and finishing techniques for diverse
                fabric types.
              </li>
              <li>
                <strong>Fabric Engineering & Construction:</strong> Deep
                understanding of weaving and knitting mechanisms, including loom
                settings, fabric structure analysis, and point-paper design.
              </li>
              <li>
                <strong>Textile Testing & Quality Control (TTQC):</strong>{" "}
                Proficiency in laboratory testing for fiber fineness, tensile
                strength, GSM verification, and colorfastness according to ISO
                and AATCC standards.
              </li>
              <li>
                <strong>Production Planning & Management:</strong> Specialized
                training in industrial workflow optimization, material
                requirement planning (MRP), and shop-floor leadership to
                maximize output efficiency.
              </li>
              <li>
                <strong>Industrial Attachment & Field Work:</strong> Completed
                intensive industrial training within a composite textile
                environment, gaining real-time experience in troubleshooting and
                large-scale manufacturing operations.
              </li>
              <li>
                <strong>Engineering Fundamentals:</strong> Technical foundation
                in engineering drawing, AutoCAD, and basic mechanical/electrical
                maintenance relevant to textile machinery.
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

export default Diploma;

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
