import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Ad } from "../../components/Ad";
import { Post } from "../../components/Post";
import { GeneralContainer } from "../../components/Styled/Containers/General";
import { Navbar } from "../../components/Styled/Navbar";
import { NotFoundPage } from "../404";
import { useConnect } from "./connect";

export const PostPage = () => {
  const { postId } = useParams();

  const { post, loading } = useConnect(postId);

  if (!loading) return null;

  if (!post) return <NotFoundPage />;

  return (
    <>
      <Navbar />

      <GeneralContainer>
        <Box
          maxHeight="10vh"
          background="white.200"
          m="10"
          p="5"
          borderRadius="5px"
        >
          <Text fontWeight="600" fontSize="1.5rem">
            Post
          </Text>
        </Box>

        <Box background="white.200" m="10" p="5" borderRadius="5px">
          <Post post={post} myKey={parseInt(post._id)} />
        </Box>

        <Ad />
      </GeneralContainer>
    </>
  );
};
