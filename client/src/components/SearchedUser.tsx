import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

import { useConnect } from "../pages/Search/connect";
import { User } from "../types";

interface Props {
  searchedUser: User;
  isHistorial?: boolean;
}

export const SearchedUser = ({ searchedUser, isHistorial }: Props) => {
  const { addToHistorial, removeFromHistorial } = useConnect();

  return (
    <Flex
      p="3"
      borderRadius="5px"
      bg="white"
      mb="2"
      alignItems="center"
      gap="3"
    >
      <Avatar src={searchedUser.picturePath} />
      <Box>
        <Text
          fontWeight="600"
          cursor="pointer"
          _hover={{ color: "blue.100" }}
          transition="0.2s"
          onClick={() => {
            addToHistorial(searchedUser);
          }}
        >
          {searchedUser.firstName} {searchedUser.lastName}
        </Text>
        <Text fontSize="0.8rem">{searchedUser.occupation}</Text>
      </Box>

      {isHistorial && (
        <Box
          onClick={() => {
            removeFromHistorial(searchedUser);
          }}
          ml="auto"
          zIndex="10"
          pr="3"
        >
          <MdClose size="20" className="icon" />
        </Box>
      )}
    </Flex>
  );
};
