import { Box } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const NotFoundContainer = ({ children }: ChildrenProps) => {
  return (
    <Box
      background="black"
      width="100vw"
      height="93vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};
