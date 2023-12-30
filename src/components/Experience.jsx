import React, { useContext } from "react";
import { Box, Heading, Text, Grid, ResponsiveContext } from "grommet";
import {
  TbBrandPython,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandCpp,
  TbBrandPowershell,
  TbBrandMysql,
  TbBrandCSharp,
} from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { SiFlask, SiMongodb } from "react-icons/si";
import { ExperienceGridCard } from "./DataGrid/ExperienceGridCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export const Experience = () => {
  const size = useContext(ResponsiveContext);
  const technologies = [
    {
      icon: TbBrandCpp,
      color: "#007bff",
      title: "C++",
    },
    {
      icon: FaJava,
      color: "#f89820",
      title: "Java",
    },
    {
      icon: TbBrandPython,
      color: "#f7e018",
      title: "Python",
    },
    {
      icon: TbBrandJavascript,
      color: "#FF8C00",
      title: "Javascript",
    },
    {
      icon: TbBrandCSharp,
      color: "#90EE90",
      title: "C#",
    },
    {
      icon: TbBrandHtml5,
      color: "#e34c26",
      title: "HTML",
    },
    {
      icon: BsFiletypeXml,
      color: "#6C8EBF",
      title: "XML",
    },
    {
      icon: TbBrandCss3,
      color: "#264de4",
      title: "CSS",
    },

    {
      icon: TbBrandReact,
      color: "#61dbfb",
      title: "ReactJS",
    },

    {
      icon: DiNodejs,
      color: "#3c873a",
      title: "NodeJS",
    },

    {
      icon: SiFlask,
      color: "black",
      title: "Flask",
    },
    {
      icon: TbBrandPowershell,
      color: "#1c6eb5",
      title: "Powershell Scripts",
    },
    {
      icon: TbBrandMysql,
      color: "#de8714",
      title: "MySQL",
    },
    {
      icon: SiMongodb,
      color: "#00ed64",
      title: "MongoDB",
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
          {technologies.map((obj, index) => {
            return <ExperienceGridCard key={index} obj={obj} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
};
