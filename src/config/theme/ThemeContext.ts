import { createContext } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  colorTheme:
    | "red"
    | "blue"
    | "yellow"
    | "green"
    | "orange"
    | "pink"
    | "strong-blue";
  toggleTheme: () => void;
  setColorTheme: (color: ThemeContextType["colorTheme"]) => void;
};

const defaultTheme = "dark";
const defaultColorTheme = "red";

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  colorTheme: defaultColorTheme,
  toggleTheme: () => {},
  setColorTheme: () => {},
});
