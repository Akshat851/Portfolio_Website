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

export const NavBar = ({ callButton }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const buttonOptions = ["Home", "About", "Portfolio", "Experience", "Contact"];
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const onClick = (obj) => {
    // toggleSidebar();
    callButton(obj);
  };
  // to change navbar color when scrolling
  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavbarColor);
  return (
    <Header
      className="navbar"
      // background={colorChange ? "#293445" : "#293445"}
      background="#293445"
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
                      color: "#171E29",
                    }}
                    onClick={() => {
                      callButton(obj);
                    }}
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
            background="linear-gradient(to bottom, #171E29, #293445)"
            pad="large"
          >
            <Button alignSelf="end" icon={<Close />} onClick={toggleSidebar} />
            <Box gap="large" height="100vh" align="center">
              {buttonOptions.map((obj, key) => {
                return (
                  <Button
                    key={key}
                    margin="small"
                    plain
                    label={obj}
                    onClick={() => onClick(obj)}
                  />
                );
              })}
            </Box>
          </Box>
        </Layer>
      )}
    </Header>
  );
};
