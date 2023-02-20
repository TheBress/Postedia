import { Box, Flex, HStack, Button, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BiLogOut } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../../../redux";
import { MdNotifications } from "react-icons/md";
import { useConnect } from "./connect";
import { NotificationsText } from "../Texts/NumberNotifications";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalNotifications } = useConnect();

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
            <Box
              mr="25px"
              _hover={{ background: "transparent", color: "white" }}
              transition=".3s"
              cursor="pointer"
              onClick={() => {
                navigate("/notifications");
              }}
            >
              <MdNotifications size="25" />

              {totalNotifications && (
                <NotificationsText totalNotifications={totalNotifications} />
              )}
            </Box>

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
