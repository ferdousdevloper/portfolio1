import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import {
  FaAward,
  FaTrophy,
  FaBookOpen,
  FaMedal,
  FaCheckCircle,
} from "react-icons/fa";

const AccomplishmentSection = () => {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <FadeIn>
          <SectionTitle title="Accomplishments" />
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mt-4">
            A collection of professional achievements, recognitions, and
            contributions that reflect my dedication, skills, and continuous
            growth across technology, leadership, and real-world projects.
          </p>
        </FadeIn>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {/* ================= AWARDS ================= */}
          <FadeIn>
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 h-full shadow-neumorphic">
              <div className="flex items-center gap-3 mb-6">
                <FaAward className="text-3xl text-[#FFA500]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Awards & Recognition
                </h3>
              </div>

              <ul className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li className="flex gap-3">
                  <FaMedal className="mt-1 text-[#FFA500]" />
                  <span>
                    Recognized for leadership and responsibility in managing
                    showroom operations and team coordination in a
                    fast-paced retail environment.
                  </span>
                </li>

                <li className="flex gap-3">
                  <FaMedal className="mt-1 text-[#FFA500]" />
                  <span>
                    Appreciation for consistently maintaining operational
                    efficiency, inventory control, and customer satisfaction.
                  </span>
                </li>

                <li className="flex gap-3">
                  <FaMedal className="mt-1 text-[#FFA500]" />
                  <span>
                    Acknowledged for proactive learning and skill development
                    in modern web technologies alongside a full-time role.
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* ================= PUBLICATIONS ================= */}
          <FadeIn>
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 h-full shadow-neumorphic">
              <div className="flex items-center gap-3 mb-6">
                <FaBookOpen className="text-3xl text-fuchsia-400" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Publications & Documentation
                </h3>
              </div>

              <ul className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 text-fuchsia-400" />
                  <span>
                    Created detailed project documentation including system
                    requirements, features, and workflows for full-stack and
                    frontend applications.
                  </span>
                </li>

                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 text-fuchsia-400" />
                  <span>
                    Authored structured project descriptions and SRS-style
                    documents for academic and professional projects.
                  </span>
                </li>

                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 text-fuchsia-400" />
                  <span>
                    Regularly maintain technical notes and learning summaries
                    focused on React, JavaScript, and modern frontend practices.
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* ================= ACHIEVEMENTS ================= */}
          <FadeIn>
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <FaTrophy className="text-3xl text-accent" />
                <h3 className="text-2xl font-semibold text-black">
                  Professional Achievements
                </h3>
              </div>

              <ul className="space-y-5 text-black/80 leading-relaxed">
                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 text-[#FFB800]" />
                  <span>
                    Successfully developed and delivered multiple frontend and
                    full-stack projects including healthcare, volunteering,
                    e-commerce, and real estate platforms.
                  </span>
                </li>

                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 text-[#FFB800]" />
                  <span>
                    Led team coordination, task tracking, and code management
                    as a team leader in collaborative development projects.
                  </span>
                </li>

                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 text-[#FFB800]" />
                  <span>
                    Balanced professional responsibilities with continuous
                    upskilling in frontend development, UI/UX design, and
                    performance optimization.
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default AccomplishmentSection;
