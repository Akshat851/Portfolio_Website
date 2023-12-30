import {
  Box,
  ResponsiveContext,
  Header,
  Button,
  Heading,
  Layer,
  Text,
} from "grommet";
import { Menu as MenuIcon, Close } from "grommet-icons";
import React, { useState, useContext } from "react";

export const NavBar = ({ callButton }) => {
  const buttonOptions = ["Home", "About", "Portfolio", "Experience", "Contact"];
  const [showSidebar, setShowSidebar] = useState(false);
  const size = useContext(ResponsiveContext);
  return (
    <>
      <Header
        background="#293445"
        elevation="small"
        width="100%"
        pad={{ horizontal: "medium", vertical: "small" }}
      >
        <Box style={{ fontFamily: "Arizonia" }}>
          <Heading margin="none" level={1} color="#FFFFFF">
            Akshat
          </Heading>
        </Box>
        {size === "small" ? (
          <Box justify="end">
            <Button icon={<MenuIcon />} onClick={() => setShowSidebar(true)} />
          </Box>
        ) : (
          <Box justify="end" direction="row" gap="medium">
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
        )}
      </Header>
      {showSidebar && (
        <Layer
          background="linear-gradient(to bottom, #171E29, #293445)"
          full="vertical"
          modal={true}
          onClickOutside={() => {
            setShowSidebar(false);
          }}
          responsive={false}
          position="right"
          style={{ width: "50%" }}
        >
          <Box pad="medium" height="xsmall">
            <Button
              margin={{ top: "small" }}
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
      )}
    </>
  );
};
