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
import { useState } from "react";

function App() {
  const [active, setActive] = useState(null);

  const handleActive = (item) => {
    setActive(item);
  };
  return (
    <div>
      <GlobalStyle />
      <Navbar handleActive={handleActive} active={active} />
      <Wrapper>
        <Welcome handleActive={handleActive} />
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
