import { Post } from "../Post";
import { FeedContainer } from "../Styled/Containers/Feed";
import { useConnect } from "./connect";

interface Props {
  userId?: string;
}

export const Feed = ({ userId }: Props) => {
  const { posts, _id } = useConnect(userId);

  return (
    <FeedContainer>
      {posts.map((post, index) => (
        <Post
          post={post}
          myKey={index}
          key={index}
          userId={userId ? userId : _id}
        />
      ))}
    </FeedContainer>
  );
};
