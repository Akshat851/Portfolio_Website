import React, { useContext } from "react";
import {
  Box,
  Heading,
  Paragraph,
  Text,
  Grid,
  ResponsiveContext,
} from "grommet";
import { ExperienceGridCard } from "./DataGrid/ExperienceGridCard";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import githubImg from "../assets/github.png";
import ArrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import { Html5 } from "grommet-icons";
export const Experience = () => {
  const size = useContext(ResponsiveContext);
  const projects = [
    {
      Title: "Kannada Language App",
      Link: "abc",
      ImageSrc: ArrayDestruct,
      Color: "orange",
    },
    {
      Title: "Portfolio Website",
      Link: "abc",
      ImageSrc: ArrayDestruct,
      Color: "blue",
    },
    {
      Title: "Decentralized Government Funding",
      Link: "abc",
      ImageSrc: ArrayDestruct,
      Color: "black",
    },
    {
      Title: "Decentralized Government Funding",
      Link: "abc",
      ImageSrc: ArrayDestruct,
      Color: "black",
    },
  ];
  return (
    <Box pad="xlarge" width="100%">
      <u style={{ textDecorationColor: "#6FFFB0" }}>
        <Heading color="white" level={1} margin="none">
          Experience
        </Heading>
      </u>
      <Text color="#FFFFFF" margin={{ top: "small", bottom: "medium" }}>
        These are the technologies I've worked with
      </Text>
      <Box>
        <Grid
          columns={!["xsmall"].includes(size) ? "small" : "100%"}
          gap="medium"
        >
          {projects.map((obj, index) => {
            return <ExperienceGridCard key={index} obj={obj} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
};
