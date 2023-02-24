import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { MdClose, MdModeEdit, MdPending } from "react-icons/md";

import { Card } from "./subcomponents/Card";
import { useConnect } from "./connect";
import { User } from "../../types";
import { Form } from "./subcomponents/Form";
import { ProfileContainer } from "../Styled/Containers/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiUserFollowFill } from "react-icons/ri";
import { FollowProfileContainer } from "../Styled/Containers/FollowProfile";

interface Props {
  user: User;
}

export const ProfileCard = ({ user }: Props) => {
  const { isEdited, changeIsEdited, userInfo, loading, addFriend } =
    useConnect(user);

  if (!loading) return null;

  return (
    <ProfileContainer
      isEdited={isEdited}
      hasLinkedin={user.linkedinUrl ? true : false}
      hasTwitter={user.twitterUrl ? true : false}
    >
      <Flex gap="20px" borderBottom="1px solid black" p="3">
        <Avatar size="lg" src={user.picturePath} />
        <Box>
          <Text fontWeight="600" fontSize="1.2rem">
            {user.firstName} {user.lastName}
          </Text>
          <Flex gap="5px">
            <Text fontSize="0.9rem">{userInfo.friendsNumber}</Text>
            <Text fontSize="0.9rem">{userInfo.postNumber}</Text>
          </Flex>
          {userInfo.isUser && (
            <Text fontSize="0.9rem">
              {user.isPublic ? "Public" : "Private"}
            </Text>
          )}
        </Box>
        {userInfo.isUser && (
          <Box
            onClick={changeIsEdited}
            ml="auto"
            cursor="pointer"
            height="25px"
          >
            {isEdited ? (
              <MdClose className="icon" size="25" />
            ) : (
              <MdModeEdit className="icon" size="20" />
            )}
          </Box>
        )}

        <FollowProfileContainer userInfo={userInfo} addFriend={addFriend}>
          {(!userInfo.isFriendOrPublic || !userInfo.isUser) &&
          !userInfo.isRequest ? (
            <RiUserFollowFill size="22" />
          ) : (
            <MdPending size="22" />
          )}
        </FollowProfileContainer>
      </Flex>

      {!isEdited ? <Card profileUser={user} /> : <Form />}
      <ToastContainer />
    </ProfileContainer>
  );
};
