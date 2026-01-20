import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import pte from "../assets/Training/PTE.jpg"
import web from "../assets/Training/WebPHC.jpg"
import tspte from "../assets/Training/TSPTEC.jpg"
import {
  FaCertificate,
  FaLaptopCode,
  FaLanguage,
  FaCalendarAlt,
  FaUniversity,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

/* ================= TRAINING DATA ================= */
const trainings = [
  {
    title: "Complete Web Development Course",
    institute: "Programming Hero",
    duration: "January 2024 – June 2024",
    description:
      "An intensive, project-based web development program focused on building real-world applications and developing strong problem-solving abilities using modern web technologies.",
    highlights: [
      "HTML, CSS, Tailwind CSS",
      "JavaScript (ES6+)",
      "React.js & component-driven UI",
      "API integration & basic backend concepts",
      "Multiple real-world projects",
    ],
    icon: <FaLaptopCode />,
    certificate: web,
  },
  {
    title: "PTE Academic Preparation",
    institute: "Target Score PTE",
    duration: "May 2025 – July 2025",
    description:
      "Professional English language training designed for international academic and professional environments, with structured practice and mock examinations.",
    highlights: [
      "Academic speaking & pronunciation",
      "Listening strategies with note-taking",
      "Reading comprehension techniques",
      "Structured academic writing",
      "Mock tests & performance analysis",
    ],
    icon: <FaLanguage />,
    certificate: tspte,
  },
];

/* ================= INTERNSHIP DATA ================= */
const internships = [
  {
    company: "Knit Concern Group – Yarn Dyeing",
    duration: "November 2021 (1 Month)",
    description:
      "Hands-on industrial exposure to yarn dyeing operations, quality control processes, and production floor coordination within an export-oriented textile environment.",
  },
  {
    company: "Padma Dyeing & Bleaching, Reza Group",
    duration: "May 2018 – July 2018 (3 Months)",
    description:
      "Practical training in dyeing, bleaching, and finishing processes with a focus on process control, lab coordination, and quality assurance.",
  },
  {
    company: "Bawani Textile Mill Ltd.",
    duration: "February 2018 – April 2018 (3 Months)",
    description:
      "Industrial attachment covering spinning, production workflow, machine operation fundamentals, and basic maintenance practices.",
  },
];

const Training = () => {
  return (
    <section className="py-28">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Training & Certifications"
            subtitle="Professional learning, language proficiency & industrial exposure"
          />

            {/* ================= ENGLISH PROFICIENCY ================= */}
          <div className="mt-28 bg-white p-10 rounded-3xl shadow-xl border relative">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-yellow-400/20 blur-3xl rounded-full" />

            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <FaLanguage /> English Language Proficiency
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Demonstrated academic-level English proficiency suitable for
              international education and professional communication.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p><strong>Test:</strong> PTE Academic</p>
              <p><strong>Overall Score:</strong> 63</p>
              <p><strong>Listening:</strong> 65</p>
              <p><strong>Reading:</strong> 54</p>
              <p><strong>Speaking:</strong> 72</p>
              <p><strong>Writing:</strong> 66</p>
            </div>
            <div className="mt-10">
              <img src={pte} alt="" />
            </div>
          </div>

          {/* ================= TRAINING TIMELINE ================= */}
          <div className="mt-20 relative">
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-500/40 to-transparent hidden md:block" />

            <div className="space-y-24">
              {trainings.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={`relative md:flex ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-fuchsia-600 hidden md:block" />

                    <div className="md:w-[48%] bg-white p-8 rounded-3xl shadow-xl border relative overflow-hidden">
                      <div className="absolute -top-16 -right-16 w-48 h-48 bg-fuchsia-500/20 blur-3xl rounded-full" />

                      <div className="flex gap-4 mb-6">
                        <div className="bg-fuchsia-600 text-white p-4 rounded-2xl text-2xl">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 flex items-center gap-2">
                            <FaUniversity /> {item.institute}
                          </p>
                        </div>
                        
                      </div>

                      <p className="text-gray-500 flex items-center gap-2 mb-4">
                        <FaCalendarAlt /> {item.duration}
                      </p>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {item.highlights.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      <div className="">
                          <img className="" src={item.certificate} alt="" />
                        </div>
                    </div>
                    
                  </motion.div>
                );
              })}
            </div>
          </div>

        

          {/* ================= INTERNSHIP EXPERIENCE ================= */}
          <div className="mt-28">
            <h3 className="text-2xl font-semibold text-gray-900 mb-10 flex items-center gap-3">
              <FaBriefcase /> Internship Experience
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {internships.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-3xl shadow-lg border relative"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-fuchsia-500/20 blur-3xl rounded-full" />

                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    {item.company}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">
                    <FaCalendarAlt className="inline mr-2" />
                    {item.duration}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Training;
