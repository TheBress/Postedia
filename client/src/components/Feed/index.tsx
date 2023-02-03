import { Box } from "@chakra-ui/react";

import { Post } from "../Post";
import { useConnect } from "./connect";

interface Props {
  userId?: string;
}

export const Feed = ({ userId }: Props) => {
  const { posts } = useConnect(userId);

  // console.log(posts);

  return (
    <Box background="white.200" mt="3" m="10" p="5" borderRadius="5px">
      {posts.map((post, index) => (
        <Post post={post} myKey={index} key={index} />
      ))}
    </Box>
  );
};
