import { Box, Header, Button, Heading, Layer, Text } from "grommet";
import { Menu as MenuIcon, Close } from "grommet-icons";
import React, { useState, useContext, useEffect } from "react";

export const NavBar = ({ callButton }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const buttonOptions = ["Home", "About", "Portfolio", "Experience", "Contact"];

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    window.removeEventListener("resize", () =>
      setScreenSize(window.innerWidth)
    );
  }, []);

  return showSidebar ? (
    <Layer
      background="linear-gradient(to bottom, #171E29, #293445)"
      position="right"
      full="vertical"
      style={{ width: "40%" }}
    >
      <Box pad="medium">
        <Button
          alignSelf="end"
          icon={<Close color="white" />}
          onClick={() => {
            setShowSidebar(false);
          }}
        />
      </Box>
      <Box gap="large" align="center">
        {buttonOptions.map((obj, key) => {
          return (
            <Button
              key={key}
              margin="small"
              plain
              label={obj}
              color="white"
              onClick={() => {
                callButton(obj);
                setShowSidebar(false);
              }}
            />
          );
        })}
      </Box>
    </Layer>
  ) : (
    <Header
      className="navbar"
      background="#293445"
      pad="small"
      width="100%"
      elevation="small"
      style={{ position: "fixed" }}
      responsive={true}
    >
      <Box align="center" style={{ fontFamily: "Arizonia" }}>
        <Heading margin="none" level={1}>
          Akshat
        </Heading>
      </Box>
      {screenSize > 980 ? (
        <Box direction="row" gap="small">
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
      ) : (
        <Button icon={<MenuIcon />} onClick={() => setShowSidebar(true)} />
      )}
    </Header>
  );
};
