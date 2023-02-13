import { Flex } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const ActionsContainer = ({
  onClickAction,
  children,
}: ChildrenProps) => {
  return (
    <Flex
      _hover={{ color: "blue.100" }}
      alignItems="center"
      gap="1"
      cursor="pointer"
      onClick={onClickAction}
      transition="0.3s"
    >
      {children}
    </Flex>
  );
};
