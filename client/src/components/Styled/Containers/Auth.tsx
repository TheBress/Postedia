import { Box } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const AuthContainer = ({ children }: ChildrenProps) => {
  return (
    <Box
      width="100vw"
      height="100vh"
      background="blue.100"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={{ lg: "40vw", md: "60vw", sm: "90vw" }}
        background="white.100"
        minHeight="50vh"
        borderRadius="20px"
      >
        {children}
      </Box>
    </Box>
  );
};
