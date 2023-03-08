import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";

import { Link } from "react-router-dom";
import { MdNotifications, MdSearch } from "react-icons/md";
import { useConnect } from "./connect";
import { NotificationsText } from "../Texts/NumberNotifications";
import { IconNavbarContainer } from "../Containers/Navbar";
import { LogoutButton } from "../Buttons/Logout";

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

            <LogoutButton onClickAction={logout}>
              <BiLogOut size={30} />
            </LogoutButton>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
