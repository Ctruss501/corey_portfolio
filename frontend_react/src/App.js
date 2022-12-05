import React, { createContext, useState } from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <Navbar />
        <div className="app__theme">
          <BsFillMoonStarsFill
            className="app__theme-toggle"
            onClick={toggleTheme}
            size={18}
          />
        </div>
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
