import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { InitialState } from "../types";
import { Post } from "./Post";

export const Feed = () => {
  const posts = useSelector((state: InitialState) => state.posts);

  return (
    <Box background="white.200" mt="3" m="10" p="5" borderRadius="5px">
      {posts.map((post, index) => (
        <Post post={post} myKey={index} key={index} />
      ))}
    </Box>
  );
};
