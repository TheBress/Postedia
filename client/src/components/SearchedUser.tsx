import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GetStates } from "../functions";
import { User } from "../types";

interface Props {
  searchedUser: User;
}

export const SearchedUser = ({ searchedUser }: Props) => {
  const navigate = useNavigate();
  const { user } = GetStates();

  return (
    <Flex
      cursor="pointer"
      p="3"
      borderRadius="5px"
      bg="white"
      mb="2"
      alignItems="center"
      gap="3"
      onClick={() => {
        user._id !== searchedUser._id
          ? navigate(`/profile/${searchedUser._id}`)
          : navigate("/");
      }}
    >
      <Avatar src={searchedUser.picturePath} />
      <Box>
        <Text fontWeight="600">
          {searchedUser.firstName} {searchedUser.lastName}
        </Text>
        <Text fontSize="0.8rem">{searchedUser.occupation}</Text>
      </Box>
    </Flex>
  );
};
