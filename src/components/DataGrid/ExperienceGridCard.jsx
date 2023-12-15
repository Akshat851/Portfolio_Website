import React from "react";
import { Box, Card, Text, CardHeader, CardFooter } from "grommet";
import { useState } from "react";

export const ExperienceGridCard = ({ obj }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      elevation="xlarge"
      animation={{ type: isHovered ? "jiggle" : undefined, duration: 1500 }}
    >
      <Card height="200px" border={{ color: obj.color }} flex="grow">
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
