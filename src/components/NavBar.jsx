import {
  Box,
  Header,
  ResponsiveContext,
  Button,
  Heading,
  Layer,
  Text,
} from "grommet";
import { Menu as MenuIcon, Close } from "grommet-icons";
import React, { useState } from "react";

export const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonOptions = ["Home", "About", "Portfolio", "Experience", "Contact"];
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Header
      className="navbar"
      background="#34495E"
      pad="small"
      width="100%"
      elevation="small"
      style={{ position: "fixed" }}
    >
      <Box align="center" style={{ fontFamily: "Arizonia" }}>
        <Heading margin="none" level={1}>
          Akshat
        </Heading>
      </Box>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === "small" || responsive === "xsmall" ? (
            <Button icon={<MenuIcon />} onClick={toggleSidebar} />
          ) : (
            <Box direction="row" gap="small">
              {setShowSidebar(false)}
              {buttonOptions.map((obj, key) => {
                return (
                  <Box
                    key={key}
                    round="56px"
                    hoverIndicator={{
                      color: "#2a384f",
                    }}
                    onClick={() => {}}
                    pad="small"
                    focusIndicator={false}
                  >
                    <Text color="white">{obj}</Text>
                  </Box>
                );
              })}
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
      {showSidebar && (
        <Layer>
          <Box
            background="linear-gradient(to bottom, #171E29, #34495E)"
            pad="large"
          >
            <Button alignSelf="end" icon={<Close />} onClick={toggleSidebar} />
            <Box gap="large" height="100vh" align="center">
              {buttonOptions.map((obj, key) => {
                return <Button margin="small" plain label={obj} />;
              })}
            </Box>
          </Box>
        </Layer>
      )}
    </Header>
  );
};
