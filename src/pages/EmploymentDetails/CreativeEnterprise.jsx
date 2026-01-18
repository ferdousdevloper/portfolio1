import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import FadeIn from "../../components/FadeIn";
import { motion } from "framer-motion";

// React Icons
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaBuilding,
  FaUserTie,
  FaCalendarAlt,
} from "react-icons/fa";

// Assets
import bannerImg from "../../assets/creative/banner.jpg";
import logo from "../../assets/creative/logo.png";
import img1 from "../../assets/creative/gallery1.jpg";
import img2 from "../../assets/creative/gallery2.jpg";
import img3 from "../../assets/creative/gallery3.jpg";
import img4 from "../../assets/creative/gallery4.jpg";
import img5 from "../../assets/creative/gallery5.jpg";
import img6 from "../../assets/creative/gallery6.jpg";
import img7 from "../../assets/creative/gallery7.jpg";
import img8 from "../../assets/creative/gallery8.jpg";
import img9 from "../../assets/creative/gallery9.jpg";
import img10 from "../../assets/creative/gallery10.jpg";
import img11 from "../../assets/creative/gallery11.jpg";
import img12 from "../../assets/creative/gallery12.jpg";
import img13 from "../../assets/creative/gallery13.jpg";
import img14 from "../../assets/creative/gallery14.jpg";
import img15 from "../../assets/creative/gallery15.jpg";
import img16 from "../../assets/creative/gallery16.jpg";
import img17 from "../../assets/creative/gallery17.jpg";
import img18 from "../../assets/creative/gallery18.jpg";
import img19 from "../../assets/creative/gallery19.jpg";
import img20 from "../../assets/creative/gallery20.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

const CreativeEnterprise = () => {
  return (
    <section className="bg-white">
      {/* ===== Banner ===== */}
      <div className="relative h-[65vh] w-full">
        <img
          src={bannerImg}
          alt="Creative Enterprise Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <div className="flex items-center gap-5 mb-6">
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Creative Enterprise
              </h1>
            </div>

            <p className="text-lg text-gray-200 max-w-2xl">
              Showroom management experience at Regal Exclusive Showroom,
              focusing on operational excellence, customer satisfaction, and
              sustainable business growth.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Content ===== */}
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 py-28">
          <SectionTitle
            title="Professional Experience"
            subtitle="Showroom Manager – Regal Exclusive Showroom"
          />

          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 p-8 rounded-3xl shadow-lg border"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBuilding className="text-xl text-gray-800" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Company Overview
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Creative Enterprise operates as a Regal Exclusive Showroom located
              in Bagerhat, Bangladesh. The showroom represents premium fashion
              and lifestyle brands with a strong emphasis on structured retail
              operations, attractive visual merchandising, and customer-centric
              service delivery. Through disciplined inventory control,
              data-driven sales analysis, and team leadership, the showroom
              ensures consistent growth and brand integrity.
            </p>
          </motion.div>

          {/* Employment Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-12 bg-white p-8 rounded-3xl shadow-xl border"
          >
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <p className="flex items-center gap-3">
                <FaUserTie /> <strong>Position:</strong> Showroom Manager
              </p>
              <p className="flex items-center gap-3">
                <FaBriefcase /> <strong>Company:</strong> Creative Enterprise
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt /> <strong>Location:</strong> Bagerhat, Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <FaCalendarAlt /> <strong>Duration:</strong> Dec 2023 – Present
              </p>
            </div>
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-50 p-8 rounded-3xl shadow-lg border"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <FaBriefcase /> Key Responsibilities
            </h3>

            <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-600 leading-relaxed">
              <li>Oversee end-to-end showroom operations and daily sales flow.</li>
              <li>Forecast sales and plan monthly & yearly revenue targets.</li>
              <li>Manage inventory, stock replenishment, and shrinkage control.</li>
              <li>Ensure visual merchandising standards and brand compliance.</li>
              <li>Train, guide, and evaluate sales associates.</li>
              <li>Resolve customer issues to maintain service excellence.</li>
              <li>Coordinate pricing, promotions, and reporting with head office.</li>
              <li>Prepare sales analysis and operational performance reports.</li>
              <li>Monitor cash handling, security, and store discipline.</li>
              <li>Improve customer engagement and repeat purchase rates.</li>
            </ul>
          </motion.div>

          {/* ===== Gallery Slider ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 "
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Showroom Gallery
            </h3>

            <CoverflowSlider images={images} />
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 bg-white p-6 rounded-3xl shadow-xl border"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
              <FaMapMarkerAlt /> Location
            </h3>

            <div className="h-[400px] rounded-2xl overflow-hidden border">
              <iframe
                title="Creative Enterprise Location"
                src="https://www.google.com/maps?q=Bagerhat,Bangladesh&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
};

export default CreativeEnterprise;

/* ===== Slider Component ===== */
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
                center: {
                  scale: 1,
                  opacity: 1,
                  x: 0,
                  zIndex: 20,
                },
                left: {
                  scale: 0.85,
                  opacity: 0.5,
                  x: "-55%",
                  zIndex: 10,
                },
                right: {
                  scale: 0.85,
                  opacity: 0.5,
                  x: "55%",
                  zIndex: 10,
                },
                hidden: {
                  scale: 0.7,
                  opacity: 0,
                  zIndex: 0,
                },
              }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute w-[75%] md:w-[60%] h-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

