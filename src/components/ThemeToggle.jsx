import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full transition-all duration-300 hover:scale-110
        bg-white/20 dark:bg-white/10 
        hover:bg-[#FFA500]/30 dark:hover:bg-[#FFA500]/30
        text-gray-700 dark:text-gray-300
        border border-gray-200/50 dark:border-white/10
        shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.5),inset_2px_2px_6px_rgba(0,0,0,0.1)]
        dark:shadow-none"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <FiSun className="text-xl text-[#FFB800]" />
      ) : (
        <FiMoon className="text-xl text-indigo-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
