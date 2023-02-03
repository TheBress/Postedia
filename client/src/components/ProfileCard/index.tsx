import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { MdClose, MdModeEdit } from "react-icons/md";

import { Card } from "./Card";
import { Form } from "./Form";
import { setIsEdited } from "../../redux";
import { useConnect } from "./connect";
import { User } from "../../types";

interface Props {
  user: User;
}

export const ProfileCard = ({ user }: Props) => {
  const { isEdited, dispatch, isUser } = useConnect(user._id);

  return (
    <Box
      background="white.200"
      m="10"
      p="5"
      borderRadius="5px"
      height={!isEdited ? "50vh" : "67vh"}
    >
      <Flex gap="20px" borderBottom="1px solid black" p="3">
        <Avatar size="lg" src={user.picturePath} />
        <Box>
          <Text fontWeight="600" fontSize="1.2rem">
            {user.firstName} {user.lastName}
          </Text>
          <Text fontSize="0.9rem">{user.friends.length} friends</Text>
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

      {!isEdited ? <Card /> : <Form />}
    </Box>
  );
};
