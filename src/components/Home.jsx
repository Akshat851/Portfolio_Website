import React from "react";
import { Box, Heading, Image, Grid, Text } from "grommet";
import Akshat from "../assets/Self/homeImage.jpg";
import { FormNextLink } from "grommet-icons";
import Typewriter from "typewriter-effect";
import CustomCursor from "../assets/vectors/waving-hand.svg";
export const Home = ({ callButton }) => {
  return (
    <Box pad={{ top: "large" }} align="center" justify="center">
      <Box pad="xlarge" width="100%">
        {/* <Bullseye /> */}
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
            <Heading color="white" level={1} size="large" margin="none">
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
  );
};
