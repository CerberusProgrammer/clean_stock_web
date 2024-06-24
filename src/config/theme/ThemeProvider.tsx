import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const [colorTheme, setColorTheme] = useState<
    "red" | "blue" | "yellow" | "green" | "orange" | "pink" | "strong-blue"
  >("red");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colorTheme,
        setColorTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
