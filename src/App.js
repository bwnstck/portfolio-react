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

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
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
