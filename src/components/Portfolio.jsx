import React, { useContext } from "react";
import { Box, Heading, Text, Grid, ResponsiveContext } from "grommet";
import { GridCard } from "./DataGrid/GridCard";
import PortfolioImage from "../assets/portfolio/Portfolio.png";
import Dapp from "../assets/portfolio/Dapp.png";
import Books from "../assets/portfolio/Books.png";
import KannadaLanguage from "../assets/portfolio/KannadaLanguage.png";
import NewsApp from "../assets/portfolio/NewsApp.png";
export const Portfolio = () => {
  const size = useContext(ResponsiveContext);

  const projects = [
    {
      Description:
        "Developed Crowdfunding website using Blockchain technology.",
      Link: "#",
      ImageSrc: Dapp,
      Color: "#e8fc4c",
    },
    {
      Description: "My portfolio website build with React.js and Grommet.",
      Link: "https://github.com/Akshat851/Portfolio_Website",
      ImageSrc: PortfolioImage,
      Color: "#865ed6",
    },
    {
      Description:
        "Android App which displays list of vocabulary word for user to learn Kannada language.",
      Link: "https://github.com/Akshat851/Kannada-Language",
      ImageSrc: KannadaLanguage,
      Color: "orange",
    },
    {
      Description:
        "Android App which shows latest News with custom search functionality.",
      Link: "https://github.com/Akshat851/News-App",
      ImageSrc: NewsApp,
      Color: "red",
    },
    {
      Description: "CRUD App to maintain Books record.",
      Link: "https://github.com/Akshat851/Books-Data-App",
      ImageSrc: Books,
      Color: "cyan",
    },
  ];
  return (
    <Box pad="xlarge" width="100%" margin={{ top: "xlarge" }}>
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
