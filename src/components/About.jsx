import React from "react";
import { Box, Heading, Paragraph, Text } from "grommet";
import { Download } from "grommet-icons";
import Resume from "../assets/resume/Akshat_Mahajan-Resume.pdf";
export const About = () => {
  return (
    <Box pad="xlarge" direction="column" width="100%">
      <u style={{ textDecorationColor: "#6FFFB0" }}>
        <Heading color="white" level={1} margin="none">
          Who am I ?
        </Heading>
      </u>
      <Paragraph
        color="white"
        margin={{ top: "large" }}
        fill={true}
        textAlign="justify"
      >
        Welcome to my portfolio! I'm Akshat Mahajan, a software developer{" "}
        <i>
          <b>intern at Hewlett Packard Enterprise (HPE), </b>
        </i>
        while pursuing my studies in The National Institute of Engineering,
        Mysore, Karnataka, India (8th semester). With expertise in HTML, CSS,
        ReactJS, Grommet and XML for frontend and NodeJS, ExpressJS, Flask and
        Python for backend and MongoDB, SQL and SQLite for database, I possess a
        strong foundation in Full Stack Web Development and Android App
        Development.
      </Paragraph>
      <Paragraph
        color="white"
        margin={{ top: "medium" }}
        fill={true}
        textAlign="justify"
      >
        Passionate about problem-solving, I approach every project with
        confidence and attention to detail. Continuously staying updated with
        the latest industry trends, I aim to deliver innovative and high-quality
        solutions.
      </Paragraph>
      <Paragraph
        color="white"
        margin={{ top: "medium" }}
        fill={true}
        textAlign="justify"
      >
        Currently seeking new opportunities, I am confident in my abilities and
        excited to contribute to your team. If you are interested in hiring a
        skilled and enthusiastic software developer, or if you have any
        inquiries, please don't hesitate to contact me. Let's collaborate on
        exciting projects and create remarkable experiences together!
      </Paragraph>
      <a
        href={Resume}
        download="Akshat_Mahajan-Resume"
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
