import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";

const AboutSection = () => {
  return (
    <section className="py-32">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionTitle
            title="About Me"
            subtitle="A short introduction about myself"
          />
          <div className="absolute -right-10  w-1/2   h-[244.67px] bg-fuchsia-600/40 opacity-43 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 right-10  w-1/2 h-[144.67px] bg-[#FFB800] opacity-30 blur-3xl rounded-full" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="flex justify-center backdrop-blur-xl rounded-4xl"
              style={{
            boxShadow: "-5px -5px 15px white, 5px 5px 15px rgba(0,0,0,0.5)",
          }}
            >
              <img src={aboutImg} alt="Profile" className="w-72 md:w-full rounded-4xl" />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className=" rounded-3xl p-8 md:p-10 border border-gray-100 backdrop-blur-xl"
              style={{
            boxShadow: "-5px -5px 15px white, 5px 5px 15px rgba(0,0,0,0.5)",
          }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Mohammad Ferdous Hossain
              </h3>

              {/* INTRO */}
              <p className="mt-5 text-gray-600 leading-relaxed">
                I am a motivated and detail-oriented professional with over five
                years of hands-on experience in operations, production planning,
                inventory management, and team coordination within the textile
                and manufacturing industry. I am known for my strong
                organizational skills, adaptability, and ability to work
                effectively in fast-paced environments.
              </p>

              {/* PROFESSIONAL BACKGROUND */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                Throughout my professional journey, I have worked closely with
                cross-functional teams including planning, quality assurance,
                R&D, and logistics departments. This exposure has strengthened
                my understanding of supply chain operations, cost control,
                production efficiency, and quality compliance aligned with
                international buyer standards.
              </p>

              {/* CURRENT ROLE */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                Currently, I am working as a <strong>Showroom Manager</strong>{" "}
                at Creative Enterprise (Regal Exclusive Showroom), where I
                oversee daily operations, manage inventory flow, analyze sales
                trends, and lead a sales team to achieve performance targets
                while maintaining service excellence.
              </p>

              {/* WEB DEV PASSION */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                Alongside my professional career, I have developed a strong
                passion for frontend web development. During my free time, I
                actively build modern, responsive web applications using
                <strong> React, Tailwind CSS, JavaScript</strong>, and modern UI
                design principles. I enjoy transforming ideas into clean,
                user-friendly digital experiences.
              </p>

              {/* CAREER OBJECTIVE */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                My long-term goal is to continuously grow as a professional by
                combining my operational expertise with technical skills,
                allowing me to contribute effectively to organizations while
                advancing into roles related to operations, logistics, and
                technology-driven solutions.
              </p>

              {/* HIGHLIGHTS */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="p-4 rounded-xl glass border">
                  <p className="text-gray-900 font-semibold">5+ Years</p>
                  <p className="text-gray-500">Industry Experience</p>
                </div>

                <div className="p-4 rounded-xl glass border">
                  <p className="text-gray-900 font-semibold">Operations</p>
                  <p className="text-gray-500">Planning & Control</p>
                </div>

                <div className="p-4 rounded-xl glass border">
                  <p className="text-gray-900 font-semibold">Frontend</p>
                  <p className="text-gray-500">React Developer</p>
                </div>

                <div className="p-4 rounded-xl glass border">
                  <p className="text-gray-900 font-semibold">Growth</p>
                  <p className="text-gray-500">Continuous Learner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default AboutSection;
