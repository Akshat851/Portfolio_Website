import React from "react";
import { Box, Button, Heading, Paragraph, Text } from "grommet";
import { useState } from "react";
import { Download } from "grommet-icons";
import Resume from "../assets/resume/Resume.pdf";
export const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box pad="xlarge" direction="column" width="100%">
      <u style={{ textDecorationColor: "#6FFFB0" }}>
        <Heading color="white" level={1} margin="none">
          Who am I ?
        </Heading>
      </u>
      <Paragraph color="white" margin={{ top: "large" }} fill={true}>
        Welcome to my portfolio! I'm Akshat Mahajan, a software developer intern
        at Hewlett Packard Enterprise (HPE), while pursuing my studies in The
        National Institute of Engineering, Mysore, Karnataka, India (8th
        semester). With expertise in NodeJS, ExpressJS, Flask and Shell Scripts
        for backend, and HTML, CSS, ReactJS, Grommet and XML for frontend, I
        possess a strong foundation in Full Stack Web Development and Android
        App Development.
      </Paragraph>
      <Paragraph color="white" margin={{ top: "medium" }} fill={true}>
        Passionate about problem-solving, I approach every project with
        confidence and attention to detail. Continuously staying updated with
        the latest industry trends, I aim to deliver innovative and high-quality
        solutions.
      </Paragraph>
      <Paragraph color="white" margin={{ top: "medium" }} fill={true}>
        Currently seeking new opportunities, I am confident in my abilities and
        excited to contribute to your team. If you are interested in hiring a
        skilled and enthusiastic software developer, or if you have any
        inquiries, please don't hesitate to contact me. Let's collaborate on
        exciting projects and create remarkable experiences together!
      </Paragraph>
      <a
        href={Resume}
        download="Resume"
        style={{
          textDecoration: "none",
          width: "150px",
          paddingTop: "12px",
        }}
      >
        <Box
          round="56px"
          direction="row"
          border={{
            color: "#6FFFB0",
            size: "small",
          }}
          focusIndicator={false}
          hoverIndicator={{ color: "#171E29" }}
          onClick={() => {}}
          pad={{ horizontal: "medium", vertical: "small" }}
        >
          <Text color="white">Resume</Text>
          <Box pad={{ left: "small" }} justify="center">
            <Download color="white" size="medium" />
          </Box>
        </Box>
      </a>
    </Box>
  );
};
