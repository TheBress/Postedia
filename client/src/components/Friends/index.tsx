import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import { useConnect } from "./connect";

interface Props {
  friendID: string;
  name: string;
  myKey?: number;
  userPicturePath: string;
  subtitle: string;
}

export const Friend = ({
  friendID,
  myKey,
  name,
  userPicturePath,
  subtitle,
}: Props) => {
  const { isFriend, patchFriend, isUser } = useConnect(friendID);

  return (
    <Flex key={myKey} mt="2" gap="3" alignItems="center">
      <Avatar src={userPicturePath} />

      <Box>
        <Text fontWeight="600">{name}</Text>
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
