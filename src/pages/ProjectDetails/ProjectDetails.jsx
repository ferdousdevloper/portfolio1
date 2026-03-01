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
import globalNews from "../../assets/projects/global-news.png"
import gadgetGalaxy from "../../assets/projects/gadget-galaxy.png"
import volunteerLink from "../../assets/projects/volunteer-link.png"
import diagnoCare from "../../assets/projects/diagno-care.png"
import juteWoodDecor from "../../assets/projects/jute-wood.png"
import luxuryRentals from "../../assets/projects/luxury-home.png"

/**-------------- gallery image imports-------------*/
import globalNews1 from "../../assets/projects/global-news1.png"
import globalNews2 from "../../assets/projects/global-news2.png"
import globalNews3 from "../../assets/projects/global-news3.png"
import globalNews4 from "../../assets/projects/global-news4.png"
import globalNews5 from "../../assets/projects/global-news5.png"

 import gadgetGalaxy1 from "../../assets/projects/gadget-galaxy-1.png"
 import gadgetGalaxy2 from "../../assets/projects/gadget-galaxy-2.png"
 import gadgetGalaxy3 from "../../assets/projects/gadget-galaxy-3.png"

 import volunteerLink1 from "../../assets/projects/volunteerLink1.png"
 import volunteerLink2 from "../../assets/projects/volunteerLink2.png"
 import volunteerLink3 from "../../assets/projects/volunteerLink3.png"
 import volunteerLink4 from "../../assets/projects/volunteerLink4.png"
 import volunteerLink5 from "../../assets/projects/volunteerLink5.png"
 import volunteerLink6 from "../../assets/projects/volunteerLink6.png"
 import volunteerLink7 from "../../assets/projects/volunteerLink7.png"
 import volunteerLink8 from "../../assets/projects/volunteerLink8.png"
 import volunteerLink9 from "../../assets/projects/volunteerLink9.png"
 import volunteerLink10 from "../../assets/projects/volunteerLink10.png"

 import diagnoCare1 from "../../assets/projects/diagnoCare1.png"
 import diagnoCare2 from "../../assets/projects/diagnoCare2.png"
 import diagnoCare3 from "../../assets/projects/diagnoCare3.png"
 import diagnoCare4 from "../../assets/projects/diagnoCare4.png"
 import diagnoCare5 from "../../assets/projects/diagnoCare5.png"
 import diagnoCare6 from "../../assets/projects/diagnoCare6.png"
 import diagnoCare7 from "../../assets/projects/diagnoCare7.png"
 import diagnoCare8 from "../../assets/projects/diagnoCare8.png"
 import diagnoCare9 from "../../assets/projects/diagnoCare9.png"

 import wood1 from "../../assets/projects/wood1.png"
 import wood2 from "../../assets/projects/wood2.png"
 import wood3 from "../../assets/projects/wood3.png"
 import wood4 from "../../assets/projects/wood4.png"
 import wood5 from "../../assets/projects/wood5.png"
 import wood6 from "../../assets/projects/wood6.png"

import luxury1 from "../../assets/projects/luxury1.png"
import luxury2 from "../../assets/projects/luxury2.png"
import luxury3 from "../../assets/projects/luxury3.png"
import luxury4 from "../../assets/projects/luxury4.png"
import luxury5 from "../../assets/projects/luxury5.png"
import luxury6 from "../../assets/projects/luxury6.png"

import bdbrandStore from "../../assets/projects/bdbrand1.jpg"
import bdbrand2 from "../../assets/projects/bdbrand2.jpg"
import bdbrandp from "../../assets/projects/bdbrandp.jpg"
import bdbrand3 from "../../assets/projects/bdbrand3.jpg"
import bdbrand4 from "../../assets/projects/bdbrand4.jpg"
import bdbrand5 from "../../assets/projects/bdbrand5.jpg"
import bdbrand6 from "../../assets/projects/bdbrand6.jpg"
import bdbrand7 from "../../assets/projects/bdbrand7.jpg"
import bdbrand8 from "../../assets/projects/bdbrand8.jpg"
import bdbrand9 from "../../assets/projects/bdbrand9.jpg"
import bdbrand10 from "../../assets/projects/bdbrnad10.jpg"
import bdbrand11 from "../../assets/projects/bdbrand11.jpg"

/* ================= PROJECT DATA ================= */
const projectData = {
  "bdbrand-store": {
    title: "BDBRAND Store",
    subtitle: "Full Stack MERN E-Commerce",
    banner: bdbrandStore,

    description:
      "A modern, full-stack MERN e-commerce application with pixel-perfect frontend, secure Node/Express backend, and real-time business analytics. Includes JWT authentication, role-based admin panel, Stripe & COD checkout, wishlist & cart management, and a statistics dashboard for store owners.",

    detailedDescription:
      "BDBRAND Store is a complete full-stack MERN e-commerce application built with a pixel-perfect React frontend and secure Node/Express backend. It features JWT authentication with role-based access (USER & ADMIN), protected routes, and password reset via OTP. The shopping experience includes category and brand filters, advanced search, detailed product pages with image gallery and zoom, add to cart, buy now, and persistent wishlist. Payments are handled through Stripe integration and Cash on Delivery (COD). The admin panel allows full management of users, products, and orders, with a real-time statistics dashboard built using Recharts and Framer Motion—showing revenue, orders, category-wise sales, and order status distribution. The stack includes React 18, Redux Toolkit, Tailwind CSS, Framer Motion, React Toastify, Recharts, Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Stripe, and Nodemailer for OTP flows.",

    features: [
      "Secure user registration & login with JWT; role-based access (USER & ADMIN)",
      "Password reset with OTP sent to email; protected routes & auto-logout on unauthorized access",
      "Browse by category, brand, product name; advanced search & filters",
      "Product page with image gallery, zoom, related products; Add to Cart & Buy Now",
      "Wishlist (add/remove, count badge, persistent per user); full cart management",
      "Stripe integration for online payments; Cash on Delivery (COD) order flow",
      "Order history for users; admin can update order status, payment status, delete orders",
      "Admin dashboard: manage users, products, orders; Store Statistics with real-time insights",
      "Statistics dashboard: total revenue, orders, products; category-wise stock & sales; revenue bar charts; radar chart for order statuses (Delivered, Pending, Canceled, Shipped, Confirmed)",
      "Toast notifications, smooth animations (Framer Motion), responsive UI with Tailwind",
    ],

    challenges: [
      "Designing scalable JWT auth with cookie + Authorization header and role middleware",
      "Integrating Stripe and COD flows with order persistence and status tracking",
      "Building real-time analytics and dashboard with Recharts and clean data aggregation",
      "Managing cart, wishlist, and product state across protected user vs admin routes",
    ],

    keyLearnings: [
      "End-to-end MERN architecture with REST APIs and MongoDB for users, products, carts, orders",
      "Role-based auth flow and ProtectedRoute patterns for admin vs user panels",
      "Stripe SDK integration and secure payment handling",
      "Dashboard design with Recharts and Framer Motion for premium analytics UI",
      "Controller-based API structure and organized backend routes",
    ],

    futurePlans: [
      "Advanced inventory and stock management",
      "Multi-vendor or marketplace expansion",
      "Enhanced analytics and reporting",
      "Mobile app (React Native) or PWA",
    ],

    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],

    live: "https://bdbrandstore.thea1wear.com/",
    github: "#",

    gallery: [bdbrandp, bdbrand3, bdbrand4, bdbrand5, bdbrand6, bdbrand7, bdbrand8, bdbrand9, bdbrand10, bdbrand11, bdbrand2],
  },

  "global-news": {
    title: "Global News",
    subtitle: "A modern news aggregation & publishing platform",
    banner: globalNews,

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

    live: "https://global-news-gama.netlify.app/",
    github: "https://github.com/ferdousdevloper/global-news-client",

    gallery: [globalNews2, globalNews3, globalNews1, globalNews5, globalNews4],
  },

  "gadget-galaxy": {
    title: "Gadget Galaxy",
    subtitle: "E-commerce product browsing platform",
    banner: gadgetGalaxy,

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

    live: "https://gadget-galaxybd.netlify.app/",
    github: "https://github.com/ferdousdevloper/Gadget-Galaxy-client",

    gallery: [gadgetGalaxy1, gadgetGalaxy2, gadgetGalaxy3],
  },

  "volunteer-link": {
    title: "Volunteer Link",
    subtitle: "Community-based volunteer management system",
    banner: volunteerLink,

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

    live: "https://volunteer-link.netlify.app",
    github: "https://github.com/ferdousdevloper/Volunteer-Link-client",

    gallery: [
      volunteerLink1, volunteerLink2, volunteerLink3, volunteerLink4, volunteerLink5, volunteerLink6, volunteerLink7, volunteerLink8, volunteerLink9, volunteerLink10
    ],
  },

  "diagno-care": {
    title: "Diagno Care",
    subtitle: "Online diagnostic & appointment platform",
    banner: diagnoCare,

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

    live: "https://diagnocare-48d76.web.app/",
    github: "https://github.com/ferdousdevloper/Diagno-Care-client",

    gallery: [
      diagnoCare1, diagnoCare2, diagnoCare3, diagnoCare4, diagnoCare5, diagnoCare6, diagnoCare7, diagnoCare8, diagnoCare9
    ],
  },

  "jute-wood-decor": {
    title: "Jute Wood Decor",
    subtitle: "Eco-friendly home décor showcase website",
    banner: juteWoodDecor,

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

    challenges: ["Maintaining visual consistency", "Optimizing large images"],

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

    live: "https://jute-wood-decore.netlify.app/",
    github: "https://github.com/ferdousdevloper/Jute-Wood-Decor",

    gallery: [wood1, wood2, wood3, wood4, wood5, wood6],
  },
  "luxury-rentals": {
    title: "Luxury Rentals",
    subtitle: "Premium real estate rental platform",
    banner: luxuryRentals,

    description:
      "Jute Wood Decor showcases handcrafted eco-friendly décor products with a focus on sustainability.",

    detailedDescription:
      "Luxury Rentals is a premium property rental website showcasing high-end apartments and villas with rich visuals and detailed property information for an upscale user experience.",

    features: [
      "Luxury property listings",
      "High-quality image galleries",
      "Detailed property information pages",
      "Premium UI & responsive layout",
    ],

    challenges: ["Maintaining visual consistency", "Optimizing large images"],

    keyLearnings: [
      "UI/UX design principles",
      "Performance optimization for visuals",
    ],

    futurePlans: [
      "E-commerce functionality",
      "Place inquiry system",
      "CMS integration",
    ],

    tech: [{ name: "React", icon: <FaReact /> }],

    live: "https://luxury-rentalsbd.netlify.app",
    github: "https://github.com/ferdousdevloper/Luxury-Rentals",

    gallery: [luxury1, luxury2, luxury3, luxury4, luxury5, luxury6],
  },
};

/* ================= COMPONENT ================= */
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <section className="py-28 text-center text-white">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
      </section>
    );
  }

  return (
    <section >
      <ProjectBanner project={project} />

      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 py-28">
          <SectionTitle
            title="Project Overview"
            subtitle="In-depth details, challenges & future plans"
          />

          <p className="mt-10 text-gray-400 max-w-4xl leading-relaxed">
            {project.detailedDescription}
          </p>

          {/* FEATURES */}
          <SectionBlock title="Key Features" items={project.features} />

          {/* CHALLENGES */}
          <SectionBlock title="Challenges Faced" items={project.challenges} />

          {/* LEARNINGS */}
          <SectionBlock title="Key Learnings" items={project.keyLearnings} />

          {/* FUTURE */}
          <div className="mt-20 bg-gray-900/40 p-10 rounded-3xl border border-white/10 shadow backdrop-blur-xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Future Development Plans
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-400">
              {project.futurePlans.map((plan, i) => (
                <li key={i}>{plan}</li>
              ))}
            </ul>
          </div>

          {/* TECH */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-6 text-white">Technology Stack</h3>
            <div className="flex flex-wrap gap-6">
              {project.tech.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-900/40 px-6 py-4 rounded-2xl shadow border border-white/10"
                >
                  <span className="text-2xl text-fuchsia-600">{t.icon}</span>
                  <span className="font-medium text-white">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="mt-16 flex gap-6">
            <a
              href={project.live}
              target="_blank"
              className="btn border-0 shadow-lg transition hover:shadow-[0_0_30px_#FFA500] hover:bg-[#FFA500]"
            >
              <FaExternalLinkAlt /> Live Preview
            </a>
            <a
              href={project.github}
              target="_blank"
              className="btn btn-outline"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          {/* GALLERY */}
          <div className="mt-28">
            <h3 className="text-2xl font-semibold mb-10 text-white">
              Project Screenshots
            </h3>
            <div className="grid md:grid-cols-2 gap-8 w-full">
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
    <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>
    <ul className="list-disc list-inside text-gray-400 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ProjectDetails;
