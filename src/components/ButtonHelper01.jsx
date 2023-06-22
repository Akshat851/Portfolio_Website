import React, { useContext, useState } from "react";
import { Anchor, Box, Button, Footer, ResponsiveContext, Text } from "grommet";
export const ButtonHelper01 = ({ obj }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <a href={obj.linkIs} style={{ padding: "8px" }}>
        {<obj.icon color={isHovered ? "gray" : "#FFFFFF"} />}
      </a>
    </Box>
  );
};
