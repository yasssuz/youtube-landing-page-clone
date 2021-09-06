import { createContext, useState } from "react";

export const ThemeSwitcherContext = createContext({});

export function ThemeSwitcherProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function changeTheme() {
    setDarkMode(prev => !prev);
  }

  return (
    <ThemeSwitcherContext.Provider
      value={{
        darkMode,
        changeTheme,
      }}
    >
      {children}
    </ThemeSwitcherContext.Provider>
  );
}
