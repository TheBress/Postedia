import { Box } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const FriendsContainer = ({ children }: ChildrenProps) => {
  return (
    <Box
      background="white.200"
      mt="3"
      m="10"
      p="5"
      borderRadius="5px"
      maxHeight="34vh"
      overflow="auto"
    >
      {children}
    </Box>
  );
};
