import React from "react";
import { NavigationDots, SocialMedia } from "../components";

// Higher order component to wrap the entire website.
// Wrapping components that share similar functionality.
// Enables each section of the screen to be of equal size.
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
