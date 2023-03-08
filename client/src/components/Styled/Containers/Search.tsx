import { Box } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const SearchContainer = ({ children, height }: ChildrenProps) => {
  return (
    <Box
      background="white.200"
      m="10"
      p="5"
      borderRadius="5px"
      overflow={height === "80vh" ? "auto" : "hidden"}
      maxHeight={height}
    >
      {children}
    </Box>
  );
};
