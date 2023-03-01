import { Flex } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const RequestContainer = ({ children }: ChildrenProps) => {
  return (
    <Flex
      mt="2"
      bg="white"
      p="3"
      borderRadius="5px"
      gap="2"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};
