import { Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element[];
}

export const FlexContainer = ({ children }: Props) => {
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
