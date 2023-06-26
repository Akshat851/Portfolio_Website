import React, { useContext } from "react";
import {
  Box,
  Heading,
  Paragraph,
  Text,
  Image,
  Grid,
  ResponsiveContext,
} from "grommet";
import { GridCard } from "./DataGrid/GridCard";
import ArrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
export const Portfolio = () => {
  const size = useContext(ResponsiveContext);

  const projects = [
    {
      Description:
        "Developed Crowdfunding website using Blockchain technology.",
      Link: "#",
      ImageSrc: ArrayDestruct,
      Color: "#e8fc4c",
    },
    {
      Description: "My portfolio website build with React.js",
      Link: "https://github.com/Akshat851/Portfolio_Website",
      ImageSrc: ArrayDestruct,
      Color: "#865ed6",
    },
    {
      Description:
        "This app displays list of vocabulary word for user to learn Kannada language.",
      Link: "https://github.com/Akshat851/Kannada-Language",
      ImageSrc: ArrayDestruct,
      Color: "orange",
    },
    {
      Description:
        "An App which shows latest News with custom search functionality.",
      Link: "https://github.com/Akshat851/News-App",
      ImageSrc: ArrayDestruct,
      Color: "red",
    },
    {
      Description: "CRUD App to maintain Books record.",
      Link: "https://github.com/Akshat851/Books-Data-App",
      ImageSrc: ArrayDestruct,
      Color: "cyan",
    },
  ];
  return (
    <Box pad="xlarge" width="100%">
      <u style={{ textDecorationColor: "#6FFFB0" }}>
        <Heading color="white" level={1} margin="none">
          Portfolio
        </Heading>
      </u>
      <Text color="#FFFFFF" margin={{ top: "small", bottom: "medium" }}>
        Checkout some of my work right here
      </Text>

      <Box>
        <Grid
          columns={!["xsmall"].includes(size) ? "medium" : "100%"}
          gap="medium"
        >
          {projects.map((obj, index) => {
            return <GridCard key={index} obj={obj} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
};
