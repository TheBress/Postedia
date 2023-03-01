import { Flex } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const NotificationContainer = ({
  setIsEnter,
  children,
}: ChildrenProps) => {
  return (
    <Flex
      onMouseOver={() => {
        if (setIsEnter) setIsEnter(true);
      }}
      onMouseOut={() => {
        if (setIsEnter) setIsEnter(false);
      }}
      alignItems="center"
      bg="white"
      mt="2"
      p="3"
      borderRadius="5px"
      gap="12px"
    >
      {children}
    </Flex>
  );
};
