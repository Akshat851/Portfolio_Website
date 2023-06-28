import React, { useContext } from "react";
import { Box, Footer, ResponsiveContext } from "grommet";
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
  const footerLinks = [
    { icon: Mail, linkIs: "mailto:someone@example.com" },
    {
      icon: Linkedin,
      linkIs: "https://www.linkedin.com/in/akshat-mahajan-1186841a9",
    },
    { icon: Github, linkIs: "https://github.com/Akshat851" },
    { icon: Instagram, linkIs: "https://www.instagram.com/akshatmahajan851/" },
    { icon: Facebook, linkIs: "https://www.facebook.com/akshat.mahajan.182" },
    { icon: Twitter, linkIs: "https://twitter.com/AkshatMahajan15" },
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
