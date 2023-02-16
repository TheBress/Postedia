import { Box } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const FeedContainer = ({ children, hasPosts }: ChildrenProps) => {
  return (
    <Box
      maxHeight={hasPosts ? "57.5vh" : "12vh"}
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
