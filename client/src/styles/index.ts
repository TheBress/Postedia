import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    blue: "#5dc7f5",
    white: "#e6e7e8",
    black: "#272829",
  },
};

const textStyles = {
  h1: {
    fontSize: ["48px", "72px"],
    fontWeight: "500",
    lineHeight: "120%",
  },
  h2: {
    fontSize: ["42px", "60px"],
    fontWeight: "500",
    lineHeight: "125%",
  },
  h3: {
    fontSize: "36px",
    fontWeight: "500",
    lineHeight: "125%",
  },
  h4: {
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: "125%",
  },
  h5: {
    fontSize: "19px",
    fontWeight: "500",
    lineHeight: "125%",
  },
  h6: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "125%",
  },
  p: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "160%",
  },
};

export const theme = extendTheme({ colors, textStyles });
