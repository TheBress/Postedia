import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import { useConnect } from "./connect";

interface Props {
  friendID: string;
  name: string;
  myKey?: number;
  userPicturePath: string;
  subtitle: string;
  mt?: string;
  userId?: string;
}

export const Friend = ({
  friendID,
  myKey,
  name,
  userPicturePath,
  subtitle,
  mt,
}: Props) => {
  const { isFriend, patchFriend, isUser, goToFriend } = useConnect(friendID);

  return (
    <Flex
      cursor="pointer"
      key={myKey}
      mt={!mt ? "0" : mt}
      gap="3"
      alignItems="center"
    >
      <Avatar cursor="pointer" onClick={goToFriend} src={userPicturePath} />

      <Box cursor="pointer" onClick={goToFriend}>
        <Text fontWeight="600">{isUser ? "You" : name}</Text>
        <Text fontSize="0.8rem">{subtitle}</Text>
      </Box>

      {!isUser && (
        <Box
          onClick={patchFriend}
          ml="auto"
          _hover={{ color: "blue.100" }}
          transition=".3s"
        >
          {isFriend ? (
            <RiUserUnfollowFill size="22" />
          ) : (
            <RiUserFollowFill size="22" />
          )}
        </Box>
      )}
    </Flex>
  );
};
