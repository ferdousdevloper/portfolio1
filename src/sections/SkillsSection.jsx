import {
  FaIndustry,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaBoxes,
  FaClipboardList,
  FaHandshake,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

/* ===== Reusable Skill Card ===== */
const SkillCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white border rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-500">
    <div className="flex items-center gap-4 mb-4">
      <Icon className="text-3xl text-primary" />
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* ===== Page Header ===== */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Skills & Expertise
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A comprehensive skill set developed through professional experience
          in textile manufacturing and operations management, complemented by
          strong expertise in modern web development technologies.
        </p>
      </div>

      {/* ===================================================== */}
      {/* ===== Employment / Professional Skills ===== */}
      {/* ===================================================== */}
      <div className="mb-24">
        <h3 className="text-2xl font-semibold text-gray-900 mb-10 flex items-center gap-3">
          <FaIndustry className="text-primary" />
          Professional & Industry Skills
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <SkillCard
            icon={FaCogs}
            title="Production Planning & Control"
            description="Hands-on experience in machine-wise production planning, capacity utilization, and workflow optimization to ensure timely and efficient output."
          />

          <SkillCard
            icon={FaBoxes}
            title="Inventory & Material Management"
            description="Strong expertise in raw material consumption tracking, stock control, and minimizing wastage while maintaining uninterrupted production flow."
          />

          <SkillCard
            icon={FaClipboardList}
            title="Quality Assurance & Compliance"
            description="Ensuring yarn dyeing quality standards in line with buyer requirements and export-oriented compliance guidelines."
          />

          <SkillCard
            icon={FaHandshake}
            title="Supplier & Buyer Coordination"
            description="Effective communication and coordination with suppliers, merchandisers, and internal departments to meet delivery schedules and quality expectations."
          />

          <SkillCard
            icon={FaChartLine}
            title="Cost Control & Efficiency Analysis"
            description="Monitoring production efficiency, identifying cost-saving opportunities, and preparing performance and productivity reports."
          />

          <SkillCard
            icon={FaUsers}
            title="Team Leadership & Supervision"
            description="Leading production teams, assigning responsibilities, resolving operational issues, and maintaining a disciplined and productive work environment."
          />
        </div>
      </div>

      {/* ===== Divider / Gap ===== */}
      <div className="flex items-center gap-6 mb-24">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 font-medium tracking-wide">
          Transition to Web Development
        </span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* ===================================================== */}
      {/* ===== Web Development Skills ===== */}
      {/* ===================================================== */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-10 flex items-center gap-3">
          <FaReact className="text-primary" />
          Web Development Skills
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <SkillCard
            icon={FaHtml5}
            title="HTML5"
            description="Writing semantic, accessible, and SEO-friendly markup to build well-structured web applications."
          />

          <SkillCard
            icon={FaCss3Alt}
            title="CSS3"
            description="Creating responsive layouts and modern UI designs with a strong focus on consistency and usability."
          />

          <SkillCard
            icon={SiTailwindcss}
            title="Tailwind CSS"
            description="Building clean, scalable, and highly responsive user interfaces using utility-first CSS principles."
          />

          <SkillCard
            icon={FaJs}
            title="JavaScript (ES6+)"
            description="Developing dynamic, interactive, and performant frontend functionality using modern JavaScript features."
          />

          <SkillCard
            icon={FaReact}
            title="React.js"
            description="Building component-based single-page applications with hooks, routing, state management, and reusable UI patterns."
          />

          <SkillCard
            icon={SiNextdotjs}
            title="Next.js"
            description="Basic experience with server-side rendering, routing, and performance optimization using Next.js."
          />

          <SkillCard
            icon={FaNodeJs}
            title="Node.js & Express.js"
            description="Creating RESTful APIs, handling authentication, and managing server-side logic for full-stack applications."
          />

          <SkillCard
            icon={SiMongodb}
            title="MongoDB"
            description="Designing and managing NoSQL databases, performing CRUD operations, and handling data efficiently."
          />

          <SkillCard
            icon={SiFirebase}
            title="Firebase Authentication"
            description="Implementing secure authentication systems including email/password and role-based access control."
          />

          <SkillCard
            icon={FaGitAlt}
            title="Git & GitHub"
            description="Version control, collaborative development, branch management, and maintaining clean project repositories."
          />

          <SkillCard
            icon={SiTypescript}
            title="TypeScript (Basic)"
            description="Using TypeScript fundamentals to improve code quality, type safety, and long-term maintainability."
          />

          <SkillCard
            icon={FaDatabase}
            title="Full-Stack Project Experience"
            description="Hands-on experience building complete projects combining frontend, backend, authentication, and database integration."
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
