import React from "react";
import { Box, Heading, Paragraph, Image, Button, Grid, Text } from "grommet";
import { useState } from "react";
import Akshat from "../assets/Self/11.jpg";
import { FormNextLink } from "grommet-icons";
import Typewriter from "typewriter-effect";
export const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box pad="xlarge" width="100%" align="center" justify="center">
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
        <Image className="shape" src={Akshat} />
        <Box pad={{ horizontal: "large" }} width="xlarge" direction="column">
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
            hoverIndicator={{ color: "#26344a" }}
            onClick={() => {}}
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
  );
};
