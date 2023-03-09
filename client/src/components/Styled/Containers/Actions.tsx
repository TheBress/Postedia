import { Flex } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const ActionsContainer = ({ children }: ChildrenProps) => {
  return (
    <Flex alignItems="center" gap="1">
      {children}
    </Flex>
  );
};
