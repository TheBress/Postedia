import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

import { useConnect } from "../pages/Search/connect";
import { User } from "../types";

interface Props {
  searchedUser: User;
}

export const SearchedUser = ({ searchedUser }: Props) => {
  const { goTo } = useConnect();

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
        goTo(searchedUser);
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
