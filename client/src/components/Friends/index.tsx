import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { MdPending } from "react-icons/md";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import { successToast } from "../../functions";
import { FriendProps } from "../../types/props";
import { useConnect } from "./connect";
import { PostActions } from "./subcomponents/postActions";

export const Friend = ({
  friendID,
  myKey,
  name,
  userPicturePath,
  subtitle,
  mt,
  userId,
  postId,
  setisUpdate,
  isUpdate,
}: FriendProps) => {
  const { isFriend, patchFriend, isUser, goToFriend, isProfile, isRequest } =
    useConnect(friendID, userId);

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

      {!isUser ? (
        <Box
          onClick={
            !isRequest
              ? patchFriend
              : () => {
                  successToast("You already sent the request!");
                }
          }
          ml="auto"
          cursor="pointer"
          _hover={{ color: "blue.100" }}
          transition=".3s"
        >
          {isFriend ? (
            <RiUserUnfollowFill size="22" />
          ) : !isFriend && !isRequest ? (
            <RiUserFollowFill size="22" />
          ) : (
            <MdPending size="22" />
          )}
        </Box>
      ) : !isProfile ? (
        <PostActions
          postId={postId}
          setisUpdate={setisUpdate}
          isUpdate={isUpdate}
        />
      ) : null}
    </Flex>
  );
};
