import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#FFA500] font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-[#FFA500] transition";

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[70%]">
      {/* main navbar */}
      <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200/50 dark:border-white/10 rounded-full shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.8),inset_2px_2px_8px_rgba(0,0,0,0.06)] dark:shadow-2xl dark:shadow-black/50 px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white"><a href="/">Portfolio</a></h1>
        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-6 text-sm">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/employment" className={linkClass}>Employment</NavLink>
            <NavLink to="/education" className={linkClass}>Education</NavLink>
            <NavLink to="/skills" className={linkClass}>Skills</NavLink>
            <NavLink to="/all-projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/accomplishment" className={linkClass}>Accomplishment</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-900 dark:text-white"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mt-3 md:hidden backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-white/10 rounded-2xl shadow-[inset_-2px_-2px_8px_rgba(255,255,255,0.8),inset_2px_2px_8px_rgba(0,0,0,0.06)] dark:shadow-xl dark:shadow-black/40 p-5 flex flex-col gap-4 text-center text-sm">
          <div className="flex justify-center mb-2">
            <ThemeToggle />
          </div>
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/employment" className={linkClass}>Employment</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/education" className={linkClass}>Education</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/all-projects" className={linkClass}>Projects</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/accomplishment" className={linkClass}>Accomplishment</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
