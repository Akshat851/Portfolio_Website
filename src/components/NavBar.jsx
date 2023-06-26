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
import React, { useState, useContext } from "react";

export const NavBar = ({ callButton }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const size = useContext(ResponsiveContext);

  const buttonOptions = ["Home", "About", "Portfolio", "Experience", "Contact"];

  return showSidebar ? (
    <Layer
      background="linear-gradient(to bottom, #171E29, #293445)"
      position="right"
    >
      <Button
        alignSelf="end"
        icon={<Close color="white" />}
        onClick={() => {
          setShowSidebar(false);
        }}
      />

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
    >
      <Box align="center" style={{ fontFamily: "Arizonia" }}>
        <Heading margin="none" level={1}>
          Akshat
        </Heading>
      </Box>
      {!["xsmall", "small"].includes(size) ? (
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
