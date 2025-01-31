// contexts/ThemeContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(mediaQuery.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    }

    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
