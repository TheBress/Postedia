import { Flex } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const FlexContainer = ({ children }: ChildrenProps) => {
  return (
    <Flex
      gap="4px"
      alignItems="center"
      cursor="pointer"
      _hover={{ color: "blue.100" }}
      transition=".2s"
    >
      {children}
    </Flex>
  );
};
