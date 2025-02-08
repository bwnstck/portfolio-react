import { lazy, Suspense, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import GlobalStyle from "./GlobalStyles";

import Welcome from "./screens/Welcome";

import { isInViewPort } from "./screens/lib/responsiveHelpers";
import NiceStuff from "./screens/NiceStuff";
const Hiring = lazy(() => import("./screens/Hiring"));
const Tech = lazy(() => import("./screens/Tech"));
const Projects = lazy(() => import("./screens/Projects"));
const AboutMe = lazy(() => import("./screens/AboutMe"));
const Contact = lazy(() => import("./screens/Contact"));

const theme = createTheme();

const useStyles = makeStyles((theme) => {
  {
    // some CSS that accesses the theme
  }
});

function App() {
  let welcome, cv, tech, projects, services, about, contact;

  const [active, setActive] = useState(null);

  const handleActive = (item) => {
    setActive(item);
  };
  const renderLoader = () => <p>Loading</p>;

  window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    welcome = document.getElementById("welcome");
    cv = document.getElementById("cv");
    tech = document.getElementById("tech");
    projects = document.getElementById("projects");
    services = document.getElementById("services");
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
      } else if (services && isInViewPort(services)) {
        handleActive("about");
      } else if ((contact && isInViewPort(contact)) || bottom) {
        handleActive("contact");
      }
    },
    false
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar handleActive={handleActive} active={active} />
      <Wrapper>
        <Welcome />
        <Suspense fallback={renderLoader()}>
          {/* <Hiring /> */}
          <Tech />
          <Projects />
          <AboutMe />
          <NiceStuff />
          <Contact />
        </Suspense>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
