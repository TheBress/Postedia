import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { UpdatedUser, User } from "../../types";
import { MdModeEdit } from "react-icons/md";

import { useState } from "react";
import { Card } from "./Card";
import { Form } from "./Form";
import { sanitizeUser } from "../../functions";

interface Props {
  user: User;
}

export const ProfileCard = ({ user }: Props) => {
  const [isEdited, setisEdited] = useState<boolean>(false);
  const sanitiedUser: UpdatedUser = sanitizeUser(user);

  return (
    <Box background="white.200" m="10" p="5" borderRadius="5px">
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
            setisEdited(!isEdited);
          }}
          ml="auto"
          cursor="pointer"
        >
          <MdModeEdit size="20" />
        </Box>
      </Flex>

      {!isEdited ? <Card user={user} /> : <Form user={sanitiedUser} />}
    </Box>
  );
};
