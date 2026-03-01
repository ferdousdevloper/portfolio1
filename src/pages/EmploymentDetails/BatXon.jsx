import SectionTitle from "../../components/SectionTitle";
import FadeIn from "../../components/FadeIn";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaUserTie,
  FaBuilding,
  FaGlobe,
  FaLaptopCode,
  FaBullhorn,
  FaPalette,
  FaCode,
  FaCogs,
} from "react-icons/fa";

// Assets
import bannerImg from "../../assets/batxon/banner.png";
import logo from "../../assets/batxon/batxonLogo.png";


const BatXon = () => {
  return (
    <section className="md:mt-0 mt-32">
      {/* ===== Banner ===== */}
      <div className="relative h-[65vh] w-full">
        <img
          src={bannerImg}
          alt="Bat Xon Limited Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <div className="flex items-center gap-5 mb-6">
              <div className="bg-white dark:bg-gray-800/80 p-4 rounded-2xl shadow-xl">
                <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Bat Xon Limited
              </h1>
            </div>

            <p className="text-lg text-gray-200 max-w-2xl">
              Full-service digital agency offering web development, digital
              marketing, graphic design, software solutions, and more. Leading
              as Founder & Web Developer to deliver quality digital experiences.
            </p>
          </div>
        </div>
      </div>

      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 py-28">
          <SectionTitle
            title="Professional Experience"
            subtitle="Founder & Web Developer – Bat Xon Limited"
          />

          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/80 dark:bg-gray-900/40 p-8 rounded-3xl shadow-neumorphic border border-gray-200/50 dark:border-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBuilding className="text-xl text-[#FFA500]" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Company Overview
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Bat Xon Limited is a digital agency that brings together a wide
              range of creative and technical services under one roof. The
              company specializes in <strong>digital marketing</strong>,{" "}
              <strong>graphic design</strong>, <strong>web development</strong>,{" "}
              <strong>software engineering</strong>, and related solutions to
              help businesses grow online. With a team of developers, designers,
              and marketing professionals, Bat Xon Limited delivers end-to-end
              digital projects with a focus on quality, innovation, and
              client satisfaction. As Founder & Web Developer, I am responsible
              for steering the technical vision and building robust web
              experiences while coordinating with design and marketing teams.
            </p>
          </motion.div>

          {/* Employment Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/80 dark:bg-gray-900/40 p-8 rounded-3xl shadow-neumorphic border border-gray-200/50 dark:border-white/10 backdrop-blur-xl"
          >
            <div className="grid md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-3">
                <FaUserTie /> <strong>Position:</strong> Founder & Web Developer
              </p>
              <p className="flex items-center gap-3">
                <FaBriefcase /> <strong>Company:</strong> Bat Xon Limited
              </p>
              <p className="flex items-center gap-3">
                <FaCalendarAlt /> <strong>Joined:</strong> 27 Feb 2026 – Present
              </p>
              <p className="flex items-center gap-3">
                <FaGlobe />{" "}
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.batxon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFA500] hover:underline"
                >
                  www.batxon.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Key Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/80 dark:bg-gray-900/40 p-8 rounded-3xl shadow-neumorphic border border-gray-200/50 dark:border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaBriefcase /> Key Responsibilities
            </h3>

            <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed">
              <li>Lead and grow Bat Xon Limited as Founder & Web Developer.</li>
              <li>Design, develop, and maintain client and in-house web projects.</li>
              <li>Coordinate with digital marketing, graphic design, and software teams.</li>
              <li>Ensure quality delivery of websites and digital solutions.</li>
              <li>Drive technical decisions and best practices across the agency.</li>
              <li>Support business development and client communication.</li>
              <li>Oversee project timelines and delivery standards.</li>
              <li>Mentor developers and align work with agency goals.</li>
            </ul>
          </motion.div>

          {/* Services / What we offer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/80 dark:bg-gray-900/40 p-8 rounded-3xl shadow-neumorphic border border-gray-200/50 dark:border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              What We Offer
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-3">
                <FaBullhorn className="text-[#FFA500]" /> Digital Marketing
              </p>
              <p className="flex items-center gap-3">
                <FaPalette className="text-[#FFA500]" /> Graphic Design
              </p>
              <p className="flex items-center gap-3">
                <FaLaptopCode className="text-[#FFA500]" /> Web Development
              </p>
              <p className="flex items-center gap-3">
                <FaCode className="text-[#FFA500]" /> Software Engineering
              </p>
              <p className="flex items-center gap-3 md:col-span-2">
                <FaCogs className="text-[#FFA500]" /> And more – full-service digital agency solutions
              </p>
            </div>
          </motion.div>

          {/* Website CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-xl text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center gap-3">
              <FaGlobe /> Visit Our Website
            </h3>
            <a
              href="https://www.batxon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-[#FFA500] text-black font-semibold hover:bg-[#FFB800] transition shadow-lg hover:shadow-[0_0_30px_#FFA500]"
            >
              www.batxon.com
            </a>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
};

export default BatXon;
