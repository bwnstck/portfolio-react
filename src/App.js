import { lazy, Suspense, useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import GlobalStyle from "./GlobalStyles";

import Welcome from "./screens/Welcome";

import { isInViewPort } from "./screens/lib/responsiveHelpers";
const Hiring = lazy(() => import("./screens/Hiring"));
const Tech = lazy(() => import("./screens/Tech"));
const Projects = lazy(() => import("./screens/Projects"));
const AboutMe = lazy(() => import("./screens/AboutMe"));
const Contact = lazy(() => import("./screens/Contact"));
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme();

const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that accesses the theme
  }
});

function App() {
  let welcome, cv, tech, projects, about, contact;

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Welcome />
  
    </ThemeProvider>
  );
}

export default App;
