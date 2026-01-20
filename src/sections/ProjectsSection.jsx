import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

/* ================= PROJECT DATA ================= */
const webProjects = [
  {
    title: "Global News – News Aggregator Platform",
    screenshot: "/src/assets/projects/global-news.png",
    description:
      "A role-based news aggregation platform with dashboards, article moderation, and real-time updates.",
  },
  {
    title: "Diagno Care – Diagnosis Website",
    screenshot: "/src/assets/projects/diagno-care.png",
    description:
      "Modern diagnosis website application featuring filtering, sorting, pagination, and detailed test views.",
  },
  {
    title: "Gadget Galaxy – E-Commerce Website",
    screenshot: "/src/assets/projects/gadget-galaxy.png",
    description:
      "Modern e-commerce website application featuring filtering, sorting, pagination, and detailed gadget views.",
  },
  {
    title: "Volunteer Link – Community Platform",
    screenshot: "/projects/volunteer-link.png",
    description:
      "A volunteer management platform connecting organizations and individuals through a clean interface.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-28 bg-white/5">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Projects"
            subtitle="Selected web development work with real-world impact"
          />

          {/* ===== Category Label ===== */}
          <div className="flex justify-center mt-12 mb-20">
            <div className="flex items-center gap-3 bg-fuchsia-600/10 text-fuchsia-400 px-6 py-3 rounded-full border border-fuchsia-500/30">
              <FaCode />
              <span className="font-medium">Web Development Projects</span>
            </div>
          </div>

          {/* ===== Projects ===== */}
          <div className="space-y-28">
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:gap-10 items-center justify-center"
              >
                {/* ===== IMAGE (MAIN FOCUS) ===== */}
                <div className="relative flex-1 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                  {/* Browser Bar */}
                  <div className="absolute top-0 left-0 right-0 h-9 bg-neutral-900 flex items-center gap-2 px-4 z-10">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-[420px] md:h-[520px] object-cover object-top pt-9"
                  />
                </div>

                {/* ===== TEXT (SEPARATE) ===== */}
                <div className="max-w-3xl mt-10">
                  <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                    {project.title}
                  </h3>

                  <p className="text-black/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-sm font-medium text-fuchsia-400 transition">
                    View Project Details
                    <FaExternalLinkAlt className="text-xs" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default ProjectsSection;
