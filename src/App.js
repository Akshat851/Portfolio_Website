import { Box, Grommet } from "grommet";
import { NavBar } from "./components/NavBar";
import { Home as HomePage } from "./components/Home";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { FooterBar } from "./components/FooterBar";
import { useRef, useState } from "react";
import { useEffect } from "react";
function App() {
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const contactRef = useRef(null);
  // const portfolioRef = useRef(null);
  // const experienceRef = useRef(null);

  //         stateChanger={(ref) => {
  //           // console.log(ref);
  //           scrollToSection(experienceRef);
  //         }}
  // const scrollToSection = (ref) => {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <Grommet>
      <Box
        className="main"
        background="linear-gradient(to bottom, #34495E, #171E29)"
      >
        <NavBar />
        <Box pad={{ top: "large" }}>
          <HomePage />
        </Box>
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <FooterBar />
      </Box>
    </Grommet>
  );
}

export default App;
