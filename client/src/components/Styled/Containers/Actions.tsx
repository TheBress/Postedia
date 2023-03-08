import { Flex } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const ActionsContainer = ({
  onClickAction,
  children,
}: ChildrenProps) => {
  return (
    <Flex alignItems="center" gap="1" onClick={onClickAction}>
      {children}
    </Flex>
  );
};
