import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import GlobalStyle from "./GlobalStyles";

import Welcome from "./screens/Welcome";
import Hiring from "./screens/Hiring";
import Tech from "./screens/Tech";
import Projects from "./screens/Projects";
import AboutMe from "./screens/AboutMe";
import Contact from "./screens/Contact";

import { isInViewPort } from "./screens/lib/responsiveHelpers";

function App() {
  let welcome, cv, tech, projects, about, contact;

  const [active, setActive] = useState(null);

  const handleActive = (item) => {
    setActive(item);
  };

  window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    welcome = document.getElementById("welcome");
    cv = document.getElementById("cv");
    tech = document.getElementById("tech");
    projects = document.getElementById("projects");
    about = document.getElementById("about");
    contact = document.getElementById("contact");
  });

  window.addEventListener(
    "scroll",
    function (event) {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (welcome && isInViewPort(welcome)) {
        handleActive(null);
      } else if (cv && isInViewPort(cv)) {
        handleActive("cv");
      } else if (tech && isInViewPort(tech)) {
        handleActive("tech");
      } else if (projects && isInViewPort(projects)) {
        handleActive("projects");
      } else if (about && isInViewPort(about)) {
        handleActive("about");
      } else if ((contact && isInViewPort(contact)) || bottom) {
        handleActive("contact");
      }
    },
    false
  );

  return (
    <div>
      <GlobalStyle />
      <Navbar handleActive={handleActive} active={active} />
      <Wrapper>
        <Welcome />
        <Hiring />
        <Tech />
        <Projects />
        <AboutMe />
        <Contact />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
