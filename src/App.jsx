import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return(
    <div className="app">
      <Header
        theme={theme}
        onChangeTheme={handleChangeTheme}
      />

      <Main />
    </div>
  );
}