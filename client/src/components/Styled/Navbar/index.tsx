import { Box, Flex, HStack, Button, Image } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";

import { Link } from "react-router-dom";
import { MdNotifications, MdSearch } from "react-icons/md";
import { useConnect } from "./connect";
import { NotificationsText } from "../Texts/NumberNotifications";
import { IconNavbarContainer } from "../Containers/Navbar";

export const Navbar = () => {
  const { totalNotifications, logout } = useConnect();

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
            <IconNavbarContainer url="search">
              <MdSearch size="25" />
            </IconNavbarContainer>

            <IconNavbarContainer url="notifications">
              <MdNotifications size="25" />
              <>
                {totalNotifications ? (
                  <NotificationsText totalNotifications={totalNotifications} />
                ) : null}
              </>
            </IconNavbarContainer>

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
