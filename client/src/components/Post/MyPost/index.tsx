import { Avatar, Box, Flex } from "@chakra-ui/react";
import { PostInput } from "../../Styled/Inputs/Post";
import { useConnect } from "./connect";
import { PostOptions } from "./PostOptions";

export const NewPost = () => {
  const { picturePath, post, handleChange, handleSubmit } = useConnect();

  return (
    <Box background="white.200" m="10" p="5" borderRadius="5px">
      <form onSubmit={handleSubmit}>
        <Flex
          pb="3"
          alignItems="center"
          gap="10px"
          borderBottom="1px solid black"
        >
          <Avatar src={picturePath} />
          <PostInput
            placeholder="What´s on your mind"
            value={post.description}
            name="description"
            handleChange={handleChange}
          />
        </Flex>

        <PostOptions />
      </form>
    </Box>
  );
};
