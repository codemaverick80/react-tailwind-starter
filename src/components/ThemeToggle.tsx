import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5">
        <FaSun
          className={`absolute w-full h-full text-yellow-500 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-180 scale-0"
          }`}
        />
        <FaMoon
          className={`absolute w-full h-full text-gray-200 transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-180 scale-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
