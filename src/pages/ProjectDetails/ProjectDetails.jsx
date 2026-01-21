import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import FadeIn from "../../components/FadeIn";
import ProjectBanner from "../../components/ProjectBanner";

/* ================= PROJECT DATA ================= */
const projectData = {
  "global-news": {
    title: "Global News",
    subtitle: "A modern news aggregation & publishing platform",
    banner: "/src/assets/projects/global-news.png",

    description:
      "Global News is a full-stack news aggregation platform designed to deliver verified news content with role-based access control and real-time updates.",

    detailedDescription:
      "Global News was developed as a scalable digital journalism platform where readers can consume news, reporters can submit articles, and administrators can moderate and manage content efficiently. The system follows a role-based architecture ensuring secure access, smooth moderation workflow, and optimized data handling. Special focus was given to performance, responsive design, and maintainable code structure.",

    features: [
      "Role-based authentication (Admin / Reporter / Reader)",
      "News posting, editing, approval & moderation workflow",
      "Category-wise, trending & featured news sections",
      "Advanced search, filtering & pagination",
      "Admin dashboard with user & content management",
      "Reporter dashboard for article tracking",
      "Fully responsive UI for all devices",
      "Optimized API & database queries",
    ],

    challenges: [
      "Designing scalable role-based authorization",
      "Maintaining secure protected routes",
      "Handling large volumes of dynamic content",
      "Ensuring UI performance with real-time data",
    ],

    keyLearnings: [
      "Practical implementation of RBAC systems",
      "Building reusable & scalable React components",
      "Efficient API design & data flow management",
      "Real-world experience with full-stack architecture",
    ],

    futurePlans: [
      "AI-based personalized news recommendations",
      "User comments & engagement system",
      "Real-time notifications",
      "Multi-language news support",
      "SEO optimization & analytics integration",
    ],

    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],

    live: "https://global-news-demo.com",
    github: "https://github.com/yourusername/global-news",

    gallery: [
      "/projects/global-news-1.png",
      "/projects/global-news-2.png",
      "/projects/global-news-3.png",
    ],
  },

  "gadget-galaxy": {
    title: "Gadget Galaxy",
    subtitle: "E-commerce product browsing platform",
    banner: "/src/assets/projects/gadget-galaxy.png",

    description:
      "Gadget Galaxy is a product browsing and filtering platform focused on seamless user experience and dynamic data handling.",

    detailedDescription:
      "Gadget Galaxy was developed as a modern e-commerce product discovery platform where users can browse gadgets, filter by category and brand, and explore product details. The system emphasizes usability, performance optimization, and clean UI with backend-driven pagination and sorting.",

    features: [
      "Category & brand-based filtering",
      "Search & sorting functionality",
      "Backend-powered pagination",
      "Modal-based product detail view",
      "Responsive grid-based UI",
    ],

    challenges: [
      "Managing complex filtering logic",
      "Efficient pagination with backend integration",
      "Maintaining UI performance with large datasets",
    ],

    keyLearnings: [
      "Building dynamic filter systems",
      "Handling API-driven pagination",
      "Optimizing React rendering performance",
    ],

    futurePlans: [
      "User authentication & wishlist feature",
      "Shopping cart & checkout system",
      "Payment gateway integration",
      "Product reviews & ratings",
    ],

    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],

    live: "https://gadget-galaxy-demo.com",
    github: "https://github.com/yourusername/gadget-galaxy",

    gallery: [
      "/projects/gadget-galaxy-1.png",
      "/projects/gadget-galaxy-2.png",
    ],
  },

  "volunteer-link": {
    title: "Volunteer Link",
    subtitle: "Community-based volunteer management system",
    banner: "/src/assets/projects/volunteer-link.png",

    description:
      "Volunteer Link connects volunteers with organizations through a centralized management system.",

    detailedDescription:
      "Volunteer Link was built to bridge the gap between volunteers and organizations by providing a structured platform for opportunity discovery, applications, and activity management. Admins can manage roles and events, while volunteers track participation and contributions.",

    features: [
      "Volunteer opportunity management",
      "Application & approval workflow",
      "Role-based dashboards",
      "Admin user & event management",
      "Responsive UI",
    ],

    challenges: [
      "Designing application approval workflows",
      "Managing multiple user roles",
      "Ensuring smooth UX for volunteers",
    ],

    keyLearnings: [
      "Workflow-based system design",
      "Role-based UI rendering",
      "Real-world CRUD operations",
    ],

    futurePlans: [
      "Volunteer performance tracking",
      "Event attendance analytics",
      "Email & notification system",
    ],

    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],

    live: "https://volunteer-link-demo.com",
    github: "https://github.com/yourusername/volunteer-link",

    gallery: [
      "/projects/volunteer-link-1.png",
      "/projects/volunteer-link-2.png",
      "/projects/volunteer-link-3.png",
    ],
  },

  "diagno-care": {
    title: "Diagno Care",
    subtitle: "Online diagnostic & appointment platform",
    banner: "/src/assets/projects/diagno-care.png",

    description:
      "Diagno Care is a healthcare platform for online diagnostic test booking and appointment management.",

    detailedDescription:
      "Diagno Care simplifies the diagnostic service booking process by providing a digital platform for patients and administrators. The system ensures efficient appointment scheduling, service management, and secure data handling.",

    features: [
      "Online diagnostic test booking",
      "Patient & admin dashboards",
      "Service & report management",
      "Secure authentication",
      "Mobile-friendly design",
    ],

    challenges: [
      "Appointment scheduling logic",
      "Healthcare data security",
      "Form-heavy UI optimization",
    ],

    keyLearnings: [
      "Healthcare workflow modeling",
      "Secure data handling practices",
      "UX optimization for forms",
    ],

    futurePlans: [
      "Online payment integration",
      "Doctor consultation module",
      "Automated report delivery",
      "SMS & email notifications",
    ],

    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],

    live: "https://diagno-care-demo.com",
    github: "https://github.com/yourusername/diagno-care",

    gallery: [
      "/projects/diagno-care-1.png",
      "/projects/diagno-care-2.png",
      "/projects/diagno-care-3.png",
    ],
  },

  "jute-wood-decor": {
    title: "Jute Wood Decor",
    subtitle: "Eco-friendly home décor showcase website",
    banner: "/src/assets/projects/jute-wood.png",

    description:
      "Jute Wood Decor showcases handcrafted eco-friendly décor products with a focus on sustainability.",

    detailedDescription:
      "This project highlights sustainable jute and wooden décor products using a visually rich and minimalistic design. Emphasis was placed on aesthetics, smooth animations, and brand storytelling.",

    features: [
      "Product showcase gallery",
      "Eco-friendly brand storytelling",
      "Smooth UI animations",
      "Fully responsive layout",
    ],

    challenges: [
      "Maintaining visual consistency",
      "Optimizing large images",
    ],

    keyLearnings: [
      "UI/UX design principles",
      "Performance optimization for visuals",
    ],

    futurePlans: [
      "E-commerce functionality",
      "Product inquiry system",
      "CMS integration",
    ],

    tech: [{ name: "React", icon: <FaReact /> }],

    live: "https://jute-wood-decor-demo.com",
    github: "https://github.com/yourusername/jute-wood-decor",

    gallery: [
      "/projects/jute-wood-1.png",
      "/projects/jute-wood-2.png",
    ],
  },
};

/* ================= COMPONENT ================= */
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <section className="py-28 text-center text-black">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
      </section>
    );
  }

  return (
    <section>
      <ProjectBanner project={project} />

      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 py-28">
          <SectionTitle
            title="Project Overview"
            subtitle="In-depth details, challenges & future plans text-black"
          />

          <p className="mt-10 text-gray-600 max-w-4xl leading-relaxed">
            {project.detailedDescription}
          </p>

          {/* FEATURES */}
          <SectionBlock title="Key Features" items={project.features} />

          {/* CHALLENGES */}
          <SectionBlock title="Challenges Faced" items={project.challenges} />

          {/* LEARNINGS */}
          <SectionBlock title="Key Learnings" items={project.keyLearnings} />

          {/* FUTURE */}
          <div className="mt-20 bg-fuchsia-50 p-10 rounded-3xl border shadow">
            <h3 className="text-2xl font-semibold mb-6 text-black">
              Future Development Plans
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
              {project.futurePlans.map((plan, i) => (
                <li key={i}>{plan}</li>
              ))}
            </ul>
          </div>

          {/* TECH */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-6">Technology Stack</h3>
            <div className="flex flex-wrap gap-6">
              {project.tech.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow border "
                >
                  <span className="text-2xl text-fuchsia-600">{t.icon}</span>
                  <span className="font-medium text-black">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="mt-16 flex gap-6">
            <a href={project.live} target="_blank" className="btn border-0 shadow-lg transition hover:shadow-[0_0_30px_#FFA500] hover:bg-[#FFA500]">
              <FaExternalLinkAlt /> Live Preview
            </a>
            <a href={project.github} target="_blank" className="btn btn-outline">
              <FaGithub /> GitHub
            </a>
          </div>

          {/* GALLERY */}
          <div className="mt-28">
            <h3 className="text-2xl font-semibold mb-10 text-black">
              Project Screenshots
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {project.gallery.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  className="rounded-3xl shadow-xl"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

/* ===== SMALL REUSABLE BLOCK ===== */
const SectionBlock = ({ title, items }) => (
  <div className="mt-20">
    <h3 className="text-2xl font-semibold mb-6 text-black">{title}</h3>
    <ul className="list-disc list-inside text-black space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ProjectDetails;
