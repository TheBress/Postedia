import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Friend as FriendType } from "../../types";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import { useConnect } from "./connect";

interface Props {
  friend: FriendType;
  myKey: number;
}

export const Friend = ({ friend, myKey }: Props) => {
  const { isFriend, patchFriend } = useConnect(friend._id);

  return (
    <Flex key={myKey} mt="2" gap="3" alignItems="center">
      <Avatar src={friend.picturePath} />

      <Box>
        <Text>
          {friend.firstName} {friend.lastName}
        </Text>
        <Text>{friend.occupation}</Text>
      </Box>

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
    </Flex>
  );
};
