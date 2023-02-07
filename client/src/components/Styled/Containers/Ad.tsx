import { Box } from "@chakra-ui/react";
import { goTo } from "../../../functions";
import { ChildrenProps } from "../../../types/props";

export const AdContainer = ({ children }: ChildrenProps) => {
  return (
    <Box
      cursor="pointer"
      onClick={() => {
        goTo("https://www.zalando.es");
      }}
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
