import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { setLogout } from "../redux";
import { InitialState } from "../types";

export const Navbar = () => {
  const { picturePath } = useSelector((state: InitialState) => state.user);
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
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"md"} src={picturePath} mr="5" />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
