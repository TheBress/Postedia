import { Box, Flex, HStack, Button, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BiLogOut } from "react-icons/bi";

import { Link } from "react-router-dom";
import { setLogout } from "../redux";

export const Navbar = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setLogout());
  };

  return (
    <>
      <Box bg="blue.200" px={4}>
        <Flex
          pl="2"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Link to="/">
              {" "}
              <Image src="/logo.png" width="120px" />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              transition=".3s"
              mr="5"
              background="transparent"
              onClick={logout}
              _hover={{ background: "transparent", color: "white" }}
            >
              <BiLogOut size={30} />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
