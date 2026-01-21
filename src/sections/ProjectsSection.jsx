import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

/* ================= PROJECT DATA ================= */
const projects = [
  {
    id: "global-news",
    image: "/src/assets/projects/global-news.png",
  },
  {
    id: "gadget-galaxy",
    image: "/src/assets/projects/gadget-galaxy.png",
  },
  {
    id: "volunteer-link",
    image: "/src/assets/projects/volunteer-link.png",
  },
  {
    id: "diagno-care",
    image: "/src/assets/projects/diagno-care.png",
  },
  {
    id: "jute-wood-decor",
    image: "/src/assets/projects/jute-wood.png",
  },
  {
    id: "luxury-rentals",
    image: "/src/assets/projects/luxury-home.png",
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
           {/* ===== CATEGORY TAG ===== */}
          <div className="flex justify-center  mb-24">
            <div className="flex items-center gap-3 bg-fuchsia-600/10 text-fuchsia-400 px-6 py-3 rounded-full border border-fuchsia-500/30">
              <FaCode />
              <span className="font-medium">Web Development Projects</span>
            </div>
          </div>

          {/* ===== PROJECT GRID ===== */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="hover-3d"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className=" relative overflow-hidden rounded-3xl border border-white/10  cursor-pointer hover-3d">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt="Project Screenshot"
                      className="w-full"
                    />

                    
                  </div>
                </Link>
                   {/* 8 empty divs needed for the 3D effect */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default ProjectsSection;
