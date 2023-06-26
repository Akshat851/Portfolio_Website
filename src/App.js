import { Box, Grommet } from "grommet";
import { NavBar } from "./components/NavBar";
import { Home as HomePage } from "./components/Home";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { FooterBar } from "./components/FooterBar";
import { useRef } from "react";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);

  const handleClick = (obj) => {
    switch (obj) {
      case "Home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "About":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Experience":
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Portfolio":
        portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <Grommet>
      <Box
        className="main"
        background="linear-gradient(to bottom, #293445, #171E29)"
      >
        <NavBar callButton={(obj) => handleClick(obj)} />
        <div ref={homeRef} className="home">
          <HomePage callButton={(obj) => handleClick(obj)} />
        </div>
        <div ref={aboutRef} className="about">
          <About />
        </div>
        <div ref={portfolioRef} className="portfolio">
          <Portfolio />
        </div>
        <div ref={experienceRef} className="experience">
          <Experience />
        </div>
        <div ref={contactRef} className="contact">
          <Contact />
        </div>
        <FooterBar />
      </Box>
    </Grommet>
  );
}
//   background="linear-gradient(to bottom, #865ED6, #18BAB9)"
export default App;
