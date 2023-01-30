import { Box } from "@chakra-ui/react";
import { Post } from "../types";

interface Props {
  posts: Post[] | undefined;
}

export const Feed = ({ posts }: Props) => {
  return (
    <Box background="white.200" mt="3" m="10" p="5" borderRadius="5px"></Box>
  );
};
