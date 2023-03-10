import { Text } from "@chakra-ui/react";
import { getFeedHeight } from "../../functions";
import { Post } from "../Post";
import { FeedContainer } from "../Styled/Containers/Feed";
import { PrivateProfileText } from "../Styled/Texts/PrivateProfile";
import { useConnect } from "./connect";

interface Props {
  userId?: string;
  showFeed: boolean;
}

export const Feed = ({ userId, showFeed }: Props) => {
  const { posts, _id } = useConnect(userId);

  if (showFeed)
    return (
      <FeedContainer height={getFeedHeight(posts.length, showFeed)}>
        {posts.length && showFeed ? (
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
            No posts yet
          </Text>
        )}
      </FeedContainer>
    );

  return (
    <FeedContainer height={getFeedHeight(posts.length, showFeed)}>
      <PrivateProfileText />
    </FeedContainer>
  );
};
