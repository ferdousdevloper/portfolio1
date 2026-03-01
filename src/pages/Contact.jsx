import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import FadeIn from "../components/FadeIn";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qx5onso",
        "template_8k3k22v",
        formRef.current,
        "YCY8oxYohcsniJYC_",
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message ❌");
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
    >
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 blur-3xl rounded-full" />

      <FadeIn>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white my-3.5">Get In Touch</h1>
          <p className="text-gray-400">Let’s talk about projects, ideas, or opportunities</p>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-20 grid lg:grid-cols-2 gap-20 relative z-10">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Let’s build something meaningful together
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-xl">
              I’m open to freelance work, full-time roles, collaborations, or
              even a quick chat about tech and ideas. If you have something in
              mind, feel free to reach out.
            </p>

            {/* ===== EMAIL ===== */}
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-white/10">
                <FaEnvelope className="text-2xl text-[#FFA500]" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">ferdous@batxon.com</span>
            </div>

            {/* ===== SOCIAL LINKS ===== */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/ferdousdevloper",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/emferdous",
                },
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/emferdous",
                },
                {
                  icon: <FaWhatsapp />,
                  link: "https://wa.link/uejle5",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="p-4 rounded-2xl  text-[#FFA500] no-underline transition duration-500 hover:bg-[#FFA500] hover:text-white hover:border-[#FFA500] hover:shadow-[0_0_30px_#FFA500]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-10 shadow-neumorphic">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-white dark:bg-gray-900/80 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full bg-white dark:bg-gray-900/80 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500"
                  required
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full bg-white dark:bg-gray-900/80 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500"
                  required
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-[#FFA500] text-black font-medium hover:bg-[#FFB800] shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.5),inset_2px_2px_6px_rgba(0,0,0,0.1)] dark:shadow-lg transition hover:shadow-[0_0_30px_#FFA500]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
