import { Box } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const FeedContainer = ({ children }: ChildrenProps) => {
  return (
    <Box
      maxHeight="57.5vh"
      overflow="auto"
      background="white.200"
      mt="3"
      m="10"
      p="5"
      borderRadius="5px"
    >
      {children}
    </Box>
  );
};
