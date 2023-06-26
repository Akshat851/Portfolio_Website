import React from "react";
import {
  Box,
  Image,
  Card,
  Text,
  CardHeader,
  CardFooter,
  Anchor,
} from "grommet";
import { useState } from "react";

export const GridCard = ({ obj }) => {
  return (
    <Card
      elevation="xlarge"
      border={{ color: obj.Color, size: "small" }}
      margin="small"
      flex="grow"
    >
      <CardHeader>
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
        >
          <a
            href={obj.Link}
            style={{
              textDecoration: "none",
            }}
          >
            <Text size="large" color="white">
              Link
            </Text>
          </a>
        </Box>
      </CardFooter>
    </Card>
  );
};
