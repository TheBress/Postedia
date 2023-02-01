import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { MdClose, MdModeEdit } from "react-icons/md";

import { Card } from "./Card";
import { Form } from "./Form";
import { ProfileCardInfo } from "../../functions";
import { useDispatch } from "react-redux";
import { setIsEdited } from "../../redux";

export const ProfileCard = () => {
  const { user, isEdited, sanitizedUser } = ProfileCardInfo();
  const dispatch = useDispatch();

  return (
    <Box
      background="white.200"
      m="10"
      p="5"
      borderRadius="5px"
      height={!isEdited ? "50vh" : "auto"}
    >
      <Flex gap="20px" borderBottom="1px solid black" p="3">
        <Avatar size="lg" src={user.picturePath} />
        <Box>
          <Text fontWeight="600" fontSize="1.2rem">
            {user.firstName} {user.lastName}
          </Text>
          <Text fontSize="0.9rem">{user.friends.length} friends</Text>
        </Box>
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
      </Flex>

      {!isEdited ? <Card user={user} /> : <Form user={sanitizedUser} />}
    </Box>
  );
};
