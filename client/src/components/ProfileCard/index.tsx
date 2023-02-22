import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { MdClose, MdModeEdit, MdPending } from "react-icons/md";

import { Card } from "./subcomponents/Card";
import { useConnect as profileUseconnect } from "./connect";
import { User } from "../../types";
import { Form } from "./subcomponents/Form";
import { ProfileContainer } from "../Styled/Containers/Profile";
import { sanitizeText, successToast } from "../../functions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiUserFollowFill } from "react-icons/ri";
import { useConnect } from "../Friends/connect";

interface Props {
  user: User;
}

export const ProfileCard = ({ user }: Props) => {
  const {
    isEdited,
    changeIsEdited,
    isUser,
    friendsNumber,
    postNumber,
    isFriendOrPublic,
    isRequest,
    actualUser,
  } = profileUseconnect(user);

  const { patchFriend } = useConnect(user._id, actualUser._id);

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
            <Text fontSize="0.9rem">
              {sanitizeText(friendsNumber, "friend")}
            </Text>
            <Text fontSize="0.9rem">{sanitizeText(postNumber, "post")}</Text>
          </Flex>
          <Text fontSize="0.9rem">{user.isPublic ? "Public" : "Private"}</Text>
        </Box>
        {isUser && (
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

        <Box
          ml="auto"
          display={(isFriendOrPublic || isUser) && !isRequest ? "none" : ""}
          cursor="pointer"
          _hover={{ color: "blue.100" }}
          transition=".3s"
          height="25px"
          onClick={
            !isRequest
              ? patchFriend
              : () => {
                  successToast("You already sent the request!");
                }
          }
        >
          {(!isFriendOrPublic || !isUser) && !isRequest ? (
            <RiUserFollowFill size="22" />
          ) : (
            <MdPending size="22" />
          )}
        </Box>
      </Flex>

      {!isEdited ? <Card profileUser={user} /> : <Form />}
      <ToastContainer />
    </ProfileContainer>
  );
};
