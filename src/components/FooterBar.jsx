import React, { useContext } from "react";
import { Box, Button, Footer, ResponsiveContext, Text } from "grommet";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "grommet-icons";
export const FooterBar = () => {
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: "Terms" },
    { label: "Privacy" },
    { label: "Security" },
    { label: "Feedback" },
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
          <Button icon={<Mail color="#FFFFFF" />} />
          <Button icon={<Linkedin color="#FFFFFF" />} />
          <Button icon={<Github color="#FFFFFF" />} />
          <Button icon={<Instagram color="#FFFFFF" />} />
          <Button icon={<Facebook color="#FFFFFF" />} />
          <Button icon={<Twitter color="#FFFFFF" />} />
        </Box>
      </Footer>
    </Box>
  );
};
