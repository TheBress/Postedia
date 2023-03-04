import { useParams } from "react-router-dom";
import { Ad } from "../../components/Ad";
import { Post } from "../../components/Post";
import { FeedContainer } from "../../components/Styled/Containers/Feed";
import { GeneralContainer } from "../../components/Styled/Containers/General";
import { PageContainer } from "../../components/Styled/Containers/Page";
import { ToastContainer } from "../../components/Styled/Containers/Toast";
import { Navbar } from "../../components/Styled/Navbar";
import { getFeedHeight } from "../../functions";
import { NotFoundPage } from "../404";
import { useConnect } from "./connect";

export const PostPage = () => {
  const { postId } = useParams();

  const { post, userId } = useConnect(postId);

  if (!post) return <NotFoundPage />;

  return (
    <>
      <Navbar />

      <GeneralContainer>
        <PageContainer text={`${post.firstName} ${post.lastName}´s post`} />

        <FeedContainer height={getFeedHeight(1, true)}>
          <Post post={post} myKey={parseInt(post._id)} userId={userId} />
        </FeedContainer>

        <Ad userId={userId} />
        <ToastContainer />
      </GeneralContainer>
    </>
  );
};
