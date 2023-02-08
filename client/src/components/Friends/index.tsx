import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import { FriendProps } from "../../types/props";
import { useConnect } from "./connect";

export const Friend = ({
  friendID,
  myKey,
  name,
  userPicturePath,
  subtitle,
  mt,
  userId,
}: FriendProps) => {
  const { isFriend, patchFriend, isUser, goToFriend } = useConnect(
    friendID,
    userId
  );

  return (
    <Flex key={myKey} mt={!mt ? "0" : mt} gap="3" alignItems="center">
      <Avatar src={userPicturePath} />

      <Box onClick={goToFriend}>
        <Text
          cursor="pointer"
          _hover={{ color: "blue.100" }}
          transition="0.2s"
          fontWeight="600"
        >
          {isUser ? "You" : name}
        </Text>
        <Text fontSize="0.8rem">{subtitle}</Text>
      </Box>

      {!isUser && (
        <Box
          onClick={patchFriend}
          ml="auto"
          cursor="pointer"
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
