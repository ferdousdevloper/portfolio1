import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import creativeLogo from "../assets/creativeLogo.jpg";
import batXonLogo from "../assets/batxonLogo.png";
import knitLogo from "../assets/kclogo.png";

const EmploymentSection = () => {
  return (
    <section className="py-32">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Employment"
            subtitle="My professional journey & responsibilities"
          />

          <div className="mt-20 relative border-l border-gray-200 dark:border-white/20 pl-8 space-y-20">
            {/* ===== Experience 1 – Bat Xon Limited ===== */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#FFA500]"></span>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <img
                  src={batXonLogo}
                  alt="Creative Enterprise"
                  className="w-16 h-16 object-contain rounded-lg bg-white dark:bg-gray-800/80 p-2 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-neumorphic"
                />

                {/* Content */}
                <div className="absolute -left-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 right-10  w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
                <div
                  className="rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-white/10 w-full backdrop-blur-xl bg-white/60 dark:bg-gray-900/40 shadow-neumorphic"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Founder & Web Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Bat Xon Limited (Digital Agency) · www.batxon.com
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    27 Feb 2026 – Present
                  </p>

                  <ul className="mt-5 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Lead the agency as Founder & Web Developer.</li>
                    <li>Design and develop client and in-house web projects.</li>
                    <li>Coordinate with digital marketing, design, and software teams.</li>
                    <li>Ensure quality delivery of websites and digital solutions.</li>
                    <li>Drive technical decisions and project delivery.</li>
                    <li>Full-service agency: digital marketing, graphic design, development, and more.</li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      to="/employment/bat-xon-limited"
                      className="inline-block px-6 py-3 rounded-full bg-white dark:bg-[#FFA500] text-black font-medium hover:bg-[#FFA500] hover:text-black dark:hover:bg-[#FFB800] shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.8),inset_2px_2px_6px_rgba(0,0,0,0.08)] dark:shadow-lg transition hover:shadow-[0_0_30px_#FFA500]"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ===== Experience 2 – Creative Enterprise ===== */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#FFA500]"></span>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <img
                  src={creativeLogo}
                  alt="Creative Enterprise"
                  className="w-16 h-16 object-contain rounded-lg bg-white dark:bg-gray-800/80 p-2 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-neumorphic"
                />

                {/* Content */}
                <div className="absolute -left-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 right-10  w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
                <div
                  className="rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-white/10 w-full backdrop-blur-xl bg-white/60 dark:bg-gray-900/40 shadow-neumorphic"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Showroom Manager
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Creative Enterprise (Regal Exclusive Showroom), Bagerhat
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Dec 2023 – Present
                  </p>

                  <ul className="mt-5 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>
                      Oversee daily showroom operations including sales
                      forecasting and inventory planning.
                    </li>
                    <li>
                      Maintain accurate inbound and outbound stock records.
                    </li>
                    <li>
                      Coordinate with suppliers to ensure timely replenishment.
                    </li>
                    <li>
                      Analyze sales performance and prepare operational reports.
                    </li>
                    <li>
                      Lead, train, and motivate sales staff to achieve monthly
                      targets.
                    </li>
                    <li>
                      Ensure customer satisfaction and maintain brand standards.
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      to="/employment/creative-enterprise"
                      className="inline-block px-6 py-3 rounded-full bg-white dark:bg-[#FFA500] text-black font-medium hover:bg-[#FFA500] hover:text-black dark:hover:bg-[#FFB800] shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.8),inset_2px_2px_6px_rgba(0,0,0,0.08)] dark:shadow-lg transition hover:shadow-[0_0_30px_#FFA500]"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ===== Experience 3 – Knit Concern ===== */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#FFA500]"></span>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <img
                  src={knitLogo}
                  alt="Knit Concern Group"
                  className="w-16 h-16 object-contain rounded-lg bg-white dark:bg-gray-800/80 p-2 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-neumorphic"
                />

                {/* Content */}
                <div className="rounded-2xl p-8 shadow-xl w-full backdrop-blur-xl border border-gray-200/50 dark:border-white/10 bg-white/60 dark:bg-gray-900/40 shadow-neumorphic">
                  <div className="absolute -bottom-10 right-10  w-1/3   h-[144.67px] bg-fuchsia-600/40 opacity-33 blur-3xl rounded-full" />
                  <div className="absolute -left-10   w-1/3 h-[144.67px] bg-[#FFB800] opacity-20 blur-3xl rounded-full" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Manager – Yarn Dyeing Section
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Knit Concern Group
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Jul 2018 – Nov 2023
                  </p>

                  <ul className="mt-5 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>
                      Prepared machine-wise production planning aligned with
                      shipment deadlines.
                    </li>
                    <li>
                      Coordinated with planning, QA, lab, R&D, and finishing
                      departments.
                    </li>
                    <li>
                      Monitored raw material consumption and reduced wastage.
                    </li>
                    <li>
                      Performed cost calculations and efficiency analysis.
                    </li>
                    <li>
                      Ensured compliance with international buyer quality
                      standards.
                    </li>
                    <li>
                      Prepared productivity, efficiency, and performance reports
                      for management.
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      to="/employment/knit-concern-group"
                      className="inline-block px-6 py-3 rounded-full bg-white dark:bg-[#FFA500] text-black font-medium hover:bg-[#FFA500] hover:text-black dark:hover:bg-[#FFB800] shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.8),inset_2px_2px_6px_rgba(0,0,0,0.08)] dark:shadow-lg transition hover:shadow-[0_0_30px_#FFA500]"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default EmploymentSection;
