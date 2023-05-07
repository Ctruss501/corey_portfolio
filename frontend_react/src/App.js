import React, { useState } from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className="app" id={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
