import { Avatar, Box, Flex, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { InitialState } from "../../types";
import { PostOptions } from "./PostOptions";

export const NewPost = () => {
  const { picturePath } = useSelector((state: InitialState) => state.user);

  return (
    <Box background="white.200" m="10" p="5" borderRadius="5px">
      <form>
        <Flex
          pb="3"
          alignItems="center"
          gap="10px"
          borderBottom="1px solid black"
        >
          <Avatar src={picturePath} />
          <Input
            borderRadius="2rem"
            placeholder="What´s on your mind"
            name="textPost"
            border="1px solid black"
            _hover={{ borderColor: "black" }}
            _focus={{ borderColor: "blue.100" }}
          />
        </Flex>

        <PostOptions />
      </form>
    </Box>
  );
};
