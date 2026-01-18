import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-black/80 hover:text-primary transition";

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[70%]">
      {/* main navbar */}
      <div className="backdrop-blur-xl bg-white/30 rounded-full shadow-2xl shadow-black/50 px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-black"><a href="/">Portfolio</a></h1>
        {/* Desktop Menu */}

        <div className="hidden md:flex gap-6 text-sm">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/employment" className={linkClass}>Employment</NavLink>
          <NavLink to="/education" className={linkClass}>Education</NavLink>
          <NavLink to="/accomplishment" className={linkClass}>Accomplishment</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-black"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mt-3 md:hidden backdrop-blur-xl bg-white/40 rounded-2xl shadow-xl shadow-black/40 p-5 flex flex-col gap-4 text-center text-sm">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/employment" className={linkClass}>Employment</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/education" className={linkClass}>Education</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/accomplishment" className={linkClass}>Accomplishment</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
