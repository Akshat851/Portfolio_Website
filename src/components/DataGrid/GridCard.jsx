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
import { useState } from "react";

export const GridCard = ({ obj }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      elevation="xlarge"
      border={{ color: obj.Color, size: "small" }}
      margin="small"
      flex="grow"
    >
      <CardHeader>
        {/* <Box className="container">
          <Image src={obj.ImageSrc} fit="contain" />
          <Box className="overlay" justify="center" pad="small">
            <Text color="white" alignSelf="center">
              {obj.Description}
            </Text>
          </Box>
        </Box> */}

        <Box className="flip-card">
          <Box className="flip-card-inner">
            <Image src={obj.ImageSrc} fit="contain" />
            <Box
              className="flip-card-back"
              justify="center"
              background="#2980b9"
            >
              <Text color="white" alignSelf="center">
                {obj.Description}
              </Text>
            </Box>
          </Box>
        </Box>
      </CardHeader>
      <CardFooter>
        <Box
          pad="small"
          background="black"
          fill="horizontal"
          align="center"
          border={[
            {
              color: obj.Color,
              size: "small",
              side: "top",
            },
          ]}
          focusIndicator={false}
          onClick={() => {}}
        >
          <Text size="large" color="white">
            Link
          </Text>
        </Box>
      </CardFooter>
    </Card>
  );
};
