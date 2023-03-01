import { Box } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const FeedContainer = ({ children, height }: ChildrenProps) => {
  return (
    <Box
      maxHeight={height}
      overflow="auto"
      overflowX="hidden"
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
