import SectionTitle from "../../components/SectionTitle";
import FadeIn from "../../components/FadeIn";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserTie,
  FaBriefcase,
} from "react-icons/fa";

// Assets
import banner from "../../assets/knit/banner.jpg";
import logo from "../../assets/knit/logo.png";

import img1 from "../../assets/knit/gallery1.jpg";
import img2 from "../../assets/knit/gallery2.jpg";
import img3 from "../../assets/knit/gallery3.jpg";
import img4 from "../../assets/knit/gallery4.jpg";
import { useEffect, useState } from "react";

const images = [img1, img2, img3, img4];
const KnitConcern = () => {
  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="relative h-[65vh]">
        <img src={banner} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <div className="flex items-center gap-5 mb-6">
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <img src={logo} className="w-20 h-20 object-contain" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Knit Concern Group</h1>
                <p className="text-gray-300 text-sm">Yarn Dyeing Division</p>
              </div>
            </div>

            <p className="max-w-2xl text-gray-200">
              Manager experience managing yarn dyeing operations, quality
              compliance, and production efficiency.
            </p>
          </div>
        </div>
      </div>

      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 py-28">
          <SectionTitle
            title="Professional Experience"
            subtitle="Manager – Yarn Dyeing"
          />

          <div className="mt-16 bg-gray-50 p-8 rounded-3xl shadow-lg border">
            <h3 className="text-2xl text-gray-900 font-semibold mb-4 flex items-center gap-3">
              <FaIndustry /> Company Overview
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Knit Concern Group is a well-established and reputed textile
              manufacturing organization, widely recognized for its expertise in
              yarn dyeing services for export-oriented buyers. The company has
              built a strong reputation in the textile industry by consistently
              delivering high-quality products that meet international
              standards. The organization places strong emphasis on quality
              assurance, operational efficiency, and strict cost control,
              ensuring competitive performance in the global market. Each stage
              of the yarn dyeing process is carefully monitored through a robust
              quality control system to achieve accurate shades, color
              consistency, and long-lasting durability as required by buyers.
              Knit Concern Group adopts modern dyeing technologies, optimized
              chemical management, and eco-friendly production practices to
              minimize waste and reduce environmental impact. These sustainable
              approaches not only support responsible manufacturing but also
              enhance productivity and cost effectiveness. With a skilled
              workforce, experienced management team, and a deep understanding
              of international buyer requirements, the company is committed to
              on-time delivery, process transparency, and customer satisfaction.
              Over the years, Knit Concern Group has emerged as a trusted and
              reliable partner in the textile sector, contributing significantly
              to Bangladesh’s export-driven textile industry.
            </p>
          </div>

          <div className="mt-12 bg-white  p-8 rounded-3xl shadow-xl border grid md:grid-cols-2 gap-6 text-gray-900 border-white">
            <p className="flex items-center gap-3">
              <FaUserTie /> <strong>Position:</strong> Manager
            </p>
            <p className="flex items-center gap-3">
              <FaBriefcase /> <strong>Company:</strong> Creative Enterprise
            </p>
            <p className="flex items-center gap-3  ">
              <FaIndustry /> <strong>Department:</strong> Yarn Dyeing
            </p>
            <p className="flex items-center gap-3  ">
              <FaCalendarAlt /> <strong>Duration:</strong> Jul 2018 – Nov 2023
            </p>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-3xl shadow-lg border">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <FaBriefcase /> Key Responsibilities
            </h3>

            <ul className="grid md:grid-cols-2 list-disc list-inside gap-4 text-gray-600 leading-relaxed">
              <li>
                Developed and executed{" "}
                <strong>machine-wise production planning</strong> based on buyer
                shipment schedules and capacity utilization.
              </li>
              <li>
                Monitored <strong>raw material consumption</strong> including
                dyes, chemicals, and yarn to ensure optimal usage and minimize
                wastage.
              </li>
              <li>
                Ensured strict{" "}
                <strong>
                  quality compliance with international buyer standards
                </strong>{" "}
                by coordinating with QA, lab, and R&D teams.
              </li>
              <li>
                Coordinated effectively with{" "}
                <strong>
                  planning, dyeing, finishing, warehouse, and merchandising
                  departments
                </strong>{" "}
                to maintain smooth workflow.
              </li>
              <li>
                Prepared and analyzed{" "}
                <strong>
                  daily, weekly, and monthly efficiency & productivity reports
                </strong>{" "}
                to support management decision-making.
              </li>
              <li>
                Implemented <strong>cost control strategies</strong> through
                process optimization and reduction of rework and material loss.
              </li>
              <li>
                Supervised dyeing floor operations to ensure{" "}
                <strong>
                  shade accuracy, batch consistency, and on-time production
                  completion
                </strong>
                .
              </li>
              <li>
                Maintained{" "}
                <strong>
                  production records, batch cards, and process documentation
                </strong>{" "}
                for audit and traceability purposes.
              </li>
              <li>
                Assisted in{" "}
                <strong>
                  new shade development and lab-to-bulk approval process
                </strong>{" "}
                in collaboration with laboratory teams.
              </li>
              <li>
                Supported management in{" "}
                <strong>continuous process improvement initiatives</strong> to
                enhance productivity and reduce operational bottlenecks.
              </li>
            </ul>
          </div>

          {/* ===== Gallery Slider ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 "
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Gallery
            </h3>

            <CoverflowSlider images={images} />
          </motion.div>

          <div className="mt-20 bg-white p-6 rounded-3xl shadow-xl border">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <FaMapMarkerAlt /> Location
            </h3>

            <iframe
              src="https://www.google.com/maps?q=Narayanganj,Bangladesh&output=embed"
              className="w-full h-[400px] rounded-2xl"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default KnitConcern;

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
