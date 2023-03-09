import { Box, Flex } from "@chakra-ui/react";
import { MdShare } from "react-icons/md";
import { ChildrenProps } from "../../../types/props";

export const FollowProfileContainer = ({
  children,
  userInfo,
  addFriend,
  onClickAction,
}: ChildrenProps) => {
  return (
    <Flex ml="auto" display={userInfo?.isUser ? "none" : "flex"} gap="4">
      <MdShare className="icon" size="20" onClick={onClickAction} />
      <Box onClick={addFriend}>{children}</Box>
    </Flex>
  );
};
