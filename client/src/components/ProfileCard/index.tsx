import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { MdClose, MdModeEdit } from "react-icons/md";

import { Card } from "./subcomponents/Card";
import { setIsEdited } from "../../redux";
import { useConnect } from "./connect";
import { User } from "../../types";
import { Form } from "./subcomponents/Form";
import { ProfileContainer } from "../Styled/Containers/Profile";
import { sanitizeText } from "../../functions";

interface Props {
  user: User;
}

export const ProfileCard = ({ user }: Props) => {
  const { isEdited, dispatch, isUser, friendsNumber, postNumber } = useConnect(
    user._id
  );

  return (
    <ProfileContainer isEdited={isEdited}>
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
        </Box>
        {isUser && (
          <Box
            onClick={() => {
              dispatch(setIsEdited());
            }}
            ml="auto"
            cursor="pointer"
          >
            {isEdited ? (
              <MdClose className="icon" size="25" />
            ) : (
              <MdModeEdit className="icon" size="20" />
            )}
          </Box>
        )}
      </Flex>

      {!isEdited ? <Card profileUser={user} /> : <Form />}
    </ProfileContainer>
  );
};
