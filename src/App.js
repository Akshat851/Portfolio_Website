import { useState, useEffect, useRef } from "react";
import { Box, Heading } from "grommet";
import HashLoader from "react-spinners/HashLoader";
import { Home as HomePage } from "./components/Home";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { FooterBar } from "./components/FooterBar";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const [showLoader, setShowLoader] = useState(false);
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
      default:
        console.log("no match found");
        break;
    }
  };

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 3500);
  }, []);

  return (
    <>
      {showLoader ? (
        <Box
          align="center"
          justify="center"
          height="100vh"
          width="100%"
          background="#293445"
        >
          <HashLoader color="#6FFFB0" loading={showLoader} size={80} />
          <Box pad={{ top: "medium" }} style={{ fontFamily: "Raleway" }}>
            <Heading level={3}>Getting things ready ...</Heading>
          </Box>
        </Box>
      ) : (
        <Box background="linear-gradient(to bottom, #293445, #171E29)">
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
      )}
    </>
  );
}

export default App;
