import { Button } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const LogoutButton = ({ children, onClickAction }: ChildrenProps) => {
  return (
    <Button
      transition=".3s"
      mr="5"
      background="transparent"
      onClick={onClickAction}
      _hover={{ background: "transparent", color: "white" }}
    >
      {children}
    </Button>
  );
};
