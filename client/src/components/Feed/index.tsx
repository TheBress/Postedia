import { Text } from "@chakra-ui/react";
import { Post } from "../Post";
import { FeedContainer } from "../Styled/Containers/Feed";
import { useConnect } from "./connect";

interface Props {
  userId?: string;
}

export const Feed = ({ userId }: Props) => {
  const { posts, _id } = useConnect(userId);

  console.log(posts);

  return (
    <FeedContainer hasPosts={posts.length ? true : false}>
      {posts.length ? (
        posts.map((post, index) => (
          <Post
            post={post}
            myKey={index}
            key={index}
            userId={userId ? userId : _id}
          />
        ))
      ) : (
        <Text fontWeight="600" fontSize="1.2rem">
          No posts
        </Text>
      )}
    </FeedContainer>
  );
};
