import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCode, FaEye, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import globalNews from "../assets/projects/global-news.png"
import gadgetGalaxy from "../assets/projects/gadget-galaxy.png"
import volunteerLink from "../assets/projects/volunteer-link.png"
import diagnoCare from "../assets/projects/diagno-care.png"
import juteWoodDecor from "../assets/projects/jute-wood.png"
import luxuryRentals from "../assets/projects/luxury-home.png"
import bdbrandStore from "../assets/projects/bdbrandp.jpg"
import superShop from "../assets/projects/SuperShop-POS1.png"

const projects = [
  {
    id: "SuperShop-POS",
    title: "SuperShop POS",
    category: "POS Software",
    description: "Complete offline POS & Inventory Management System",
    tech: ["React", "Redux", "IndexedDB"],
    image: superShop,
  },
  {
    id: "bdbrand-store",
    title: "BDBrand Store",
    category: "E-Commerce",
    description: "Modern online shopping platform for Bangladeshi brands",
    tech: ["React", "Tailwind", "Firebase"],
    image: bdbrandStore,
  },
  {
    id: "global-news",
    title: "Global News",
    category: "News Portal",
    description: "Real-time news aggregation platform",
    tech: ["React", "API", "Tailwind"],
    image: globalNews,
  },
  {
    id: "gadget-galaxy",
    title: "Gadget Galaxy",
    category: "E-Commerce",
    description: "Premium electronics e-commerce website",
    tech: ["React", "Redux", "Tailwind"],
    image: gadgetGalaxy,
  },
  {
    id: "volunteer-link",
    title: "Volunteer Link",
    category: "Social Platform",
    description: "Connect volunteers with opportunities",
    tech: ["React", "MongoDB", "Express"],
    image: volunteerLink,
  },
  {
    id: "diagno-care",
    title: "DiagnoCare",
    category: "Healthcare",
    description: "Healthcare appointment booking system",
    tech: ["React", "Node.js", "MongoDB"],
    image: diagnoCare,
  },
  {
    id: "jute-wood-decor",
    title: "Jute Wood Decor",
    category: "E-Commerce",
    description: "Handicraft e-commerce for home decor",
    tech: ["React", "Tailwind", "Stripe"],
    image: juteWoodDecor,
  },
  {
    id: "luxury-rentals",
    title: "Luxury Rentals",
    category: "Real Estate",
    description: "Premium property rental platform",
    tech: ["React", "Tailwind", "Firebase"],
    image: luxuryRentals,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-fuchsia-500/30 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-violet-500/25 blur-[120px] rounded-full" />
        <div className="absolute -bottom-40 -left-1/3 w-[500px] h-[500px] bg-fuchsia-600/20 blur-[150px] rounded-full" />
      </div>

      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionTitle
            title="Projects"
            subtitle="Selected web development work with real-world impact"
          />

          <div className="flex justify-center mb-20">
            <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl text-fuchsia-600 dark:text-fuchsia-300 px-8 py-4 rounded-full border border-fuchsia-500/30 dark:border-fuchsia-500/40 shadow-lg shadow-fuchsia-500/20">
              <FaCode className="text-lg" />
              <span className="font-semibold text-lg">Web Development Projects</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                        <FaEye className="text-white text-sm" />
                        <span className="text-white text-sm font-medium">View</span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-8 pt-24">
                        <span className="inline-block px-4 py-1.5 bg-fuchsia-600/80 backdrop-blur-md rounded-full text-xs font-semibold text-white uppercase tracking-wider mb-3">
                          {project.category}
                        </span>

                        <h3 className="text-3xl font-bold text-white mb-2 transform translate-y-0 group-hover:translate-y-0">
                          {project.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                          {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/80 border border-white/20">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200/30 dark:border-white/10">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FaLaptopCode />
                        <span className="text-sm font-medium">Web</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FaMobileAlt className="text-xs" />
                        <span className="text-sm font-medium">Responsive</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-fuchsia-600/20 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300">
                        <FaCode className="text-sm" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default ProjectsSection;
