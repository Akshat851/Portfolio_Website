import React, { useContext, useState } from "react";
import { Box, Button, Footer, ResponsiveContext, Text } from "grommet";
export const ButtonHelper01 = ({ obj }) => {
  const size = useContext(ResponsiveContext);
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
      <Button icon={<obj.icon color={isHovered ? "#FFFFFF" : "gray"} />} />
    </Box>
  );
};
