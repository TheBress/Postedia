import { Flex } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";
import { useConnect } from "../Navbar/connect";

export const IconNavbarContainer = ({ children, url }: ChildrenProps) => {
  const { goTo } = useConnect();
  return (
    <Flex
      mr="25px"
      _hover={{ background: "transparent", color: "white" }}
      transition=".3s"
      cursor="pointer"
      onClick={() => {
        url && goTo(url);
      }}
    >
      {children}
    </Flex>
  );
};
