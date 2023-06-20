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
    <Box elevation="xlarge">
      <Card
        //   border={{ color: obj.Color, size: "small" }}
        // margin="small"
        flex="grow"
      >
        <CardHeader>
          <Box pad="small" fill="horizontal" align="center">
            <Html5 size="xlarge" color="orange" />
          </Box>
        </CardHeader>
        <CardFooter>
          <Box pad="small" fill="horizontal" align="center">
            <Text size="large" color="white">
              Link
            </Text>
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
};
