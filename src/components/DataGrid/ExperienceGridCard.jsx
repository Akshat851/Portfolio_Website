import React from "react";
import {
  Box,
  Heading,
  Paragraph,
  Image,
  Button,
  Grid,
  CardBody,
  Card,
  Text,
  CardHeader,
  CardFooter,
} from "grommet";
import { Html5 } from "grommet-icons";
import { useState } from "react";

export const ExperienceGridCard = ({ obj }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <Box
      elevation="xlarge"
      animation={{ type: isHovered ? "jiggle" : "none", duration: 1500 }}
    >
      <Card
        height="200px"
        border={{ color: obj.color }}
        // margin="small"
        flex="grow"
      >
        <CardHeader>
          <Box
            pad="small"
            fill="horizontal"
            align="center"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <obj.icon size="130" color={obj.color} />
          </Box>
        </CardHeader>
        <CardFooter>
          <Box pad="small" fill="horizontal" align="center">
            <Text size="large" color="white">
              {obj.title}
            </Text>
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
};
