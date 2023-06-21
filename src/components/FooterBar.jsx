import React, { useContext, useState } from "react";
import { Box, Button, Footer, ResponsiveContext, Text } from "grommet";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "grommet-icons";
import { ButtonHelper01 } from "./ButtonHelper01";
export const FooterBar = () => {
  const size = useContext(ResponsiveContext);
  const [isHovered, setIsHovered] = useState(false);
  const footerLinks = [
    { icon: Mail },
    { icon: Linkedin },
    { icon: Github },
    { icon: Instagram },
    { icon: Facebook },
    { icon: Twitter },
  ];
  return (
    <Box>
      <Footer
        direction={!["xsmall", "small"].includes(size) ? "row" : "column"}
        align="center"
        pad="medium"
        fill="horizontal"
        justify="center"
      >
        <Box direction="row" gap="xsmall">
          {footerLinks.map((obj, index) => {
            return <ButtonHelper01 obj={obj} key={index} />;
          })}
        </Box>
      </Footer>
    </Box>
  );
};
