import { extendTheme } from "@chakra-ui/react";

const colors = {
  blue: {
    100: "#5dc7f5",
    200: "#3a9dc7",
  },
  white: {
    100: "#e6e7e8",
  },
  black: {
    100: "#272829",
  },
};

export const theme = extendTheme({ colors });
