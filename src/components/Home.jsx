import React, { useContext } from "react";
import { Box, Heading, Image, Grid, Text, ResponsiveContext } from "grommet";
import Akshat from "../assets/Self/homeImage.jpg";
import { FormNextLink } from "grommet-icons";
import Typewriter from "typewriter-effect";
import { NavBar } from "./NavBar";

export const Home = ({ callButton }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box height="100vh">
      <Box width="100%" style={{ position: "fixed", top: "0", zIndex: "1" }}>
        <NavBar callButton={(obj) => callButton(obj)} />
      </Box>
      <Box align="center" justify="center" fill="vertical">
        <Box pad={{ horizontal: "xlarge" }}>
          <Grid
            columns={{
              count: "fit",
              size: ["medium", "auto"],
            }}
            rows="auto"
            responsive={true}
            align="center"
            fill="horizontal"
            gap="medium"
          >
            <Box align="center">
              <Image className="shape" src={Akshat} />
            </Box>
            <Box width="xlarge" direction="column">
              <Heading
                color="white"
                level={size === "small" || size === "xsmall" ? 2 : 1}
                size="large"
                margin="none"
              >
                <Box>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "I am a Full Stack Developer.",
                        "I am an Android Developer.",
                        "Blockchain Enthusiast.",
                      ],
                    }}
                  />
                </Box>
              </Heading>
              <Box
                margin={{ top: "small" }}
                alignSelf="start"
                round="56px"
                direction="row"
                border={{
                  color: "#6FFFB0",
                  size: "small",
                }}
                focusIndicator={false}
                hoverIndicator={{ color: "#171E29" }}
                onClick={() => {
                  callButton("Portfolio");
                }}
                pad={{ horizontal: "medium", vertical: "small" }}
              >
                <Text color="white">Portfolio</Text>
                <Box pad={{ left: "small" }} justify="center">
                  <FormNextLink color="white" size="medium" />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
