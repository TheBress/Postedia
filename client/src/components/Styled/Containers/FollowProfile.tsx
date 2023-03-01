import { Box } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const FollowProfileContainer = ({
  children,
  userInfo,
  addFriend,
}: ChildrenProps) => {
  return (
    <Box
      ml="auto"
      display={
        (userInfo?.isFriendOrPublic || userInfo?.isUser) && !userInfo?.isRequest
          ? "none"
          : ""
      }
      cursor="pointer"
      _hover={{ color: "blue.100" }}
      transition=".3s"
      height="25px"
      onClick={addFriend}
    >
      {children}
    </Box>
  );
};
