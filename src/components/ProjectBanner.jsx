import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectBanner = ({ project }) => {
  return (
    <section className="relative overflow-hidden">
      {/* ================= BLUR BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${project.banner})` }}
      />
      <div className="absolute inset-0 backdrop-blur-3xl bg-black/70" />

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="badge badge-secondary mb-4">
              Featured Project
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>

            <p className="text-white/70 mb-8 leading-relaxed max-w-xl">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.live}
                target="_blank"
                className="btn bg-white text-black font-medium  hover:text-white shadow-lg  transition hover:shadow-[0_0_30px_#FFA500] hover:bg-[#FFA500] gap-2"
              >
                <FaExternalLinkAlt /> Live Preview
              </a>

              <a
                href={project.github}
                target="_blank"
                className="btn btn-outline shadow-lg  transition hover:shadow-[0_0_30px_#FFA500] hover:bg-[#FFA500] text-white border-white/40 gap-2"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/30 blur-3xl rounded-full" />

            {/* Image Card */}
            <div className="mockup-browser border border-white/10 bg-base-300 shadow-2xl backdrop-blur-xl">
              <div className="mockup-browser-toolbar">
                <div className="input text-xs opacity-70">
                  https://{project.title.toLowerCase().replace(/\s/g, "")}.com
                </div>
              </div>
              <img
                src={project.banner}
                alt={project.title}
                className="w-full h-[260px] md:h-[360px] object-cover object-top"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;
