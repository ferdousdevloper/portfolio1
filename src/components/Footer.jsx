import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gray-800/95 dark:bg-black/90 text-gray-300 dark:text-white/80 pt-20">

      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="pointer-events-none absolute -bottom-24 right-20 w-1/2 h-[300px] bg-[#FFB800] opacity-30 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 left-20 w-1/2 h-[300px] bg-fuchsia-600/40 opacity-40 blur-[140px] rounded-full" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ================= GRID ================= */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Mohammad Ferdous Hossain
            </h3>
            <p className="leading-relaxed text-white/70">
              Frontend Web Developer & Tech Enthusiast with a background in
              Textile Engineering and professional experience in management.
              Passionate about building modern, user-friendly web applications.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                ["About Me", "/about"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Accomplishments", "#accomplishments"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="hover:text-[#FFA500] transition duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PROJECTS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Featured Projects
            </h4>
            <ul className="space-y-3">
              {[
                ["BDBRAND Store", "/projects/bdbrand-store"],
                ["Global News", "/projects/global-news"],
                ["Gadget Galaxy", "/projects/gadget-galaxy"],
                ["Volunteer Link", "/projects/volunteer-link"],
                ["Diagno Care", "/projects/diagno-care"],
                ["Jute Wood Decor", "/projects/jute-wood-decor"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="hover:text-[#FFA500] transition duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FFA500]" />
                <span>ferdous@batxon.com</span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FFA500]" />
                <span>+880 1952821555</span>
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#FFA500]" />
                <span>Cox's Bazar, Bangladesh</span>
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              {[
                ["https://github.com/ferdousdevloper", <FaGithub />],
                ["https://www.linkedin.com/in/emferdous", <FaLinkedin />],
                ["https://www.facebook.com/emferdous", <FaFacebook />],
                ["https://wa.link/uejle5", <FaWhatsapp />],
              ].map(([link, icon], i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  className="p-3 rounded-full bg-white/10 hover:bg-[#FFA500] hover:text-black transition hover:shadow-[0_0_30px_#FFA500] shadow-lg"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10 mt-16 py-6 text-center text-white/60">
          © {new Date().getFullYear()} Mohammad Ferdous Hossain. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
