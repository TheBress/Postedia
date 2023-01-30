import { Box, Grid } from "@chakra-ui/react";
import { Feed } from "../components/Feed";
import { MyPost } from "../components/MyPost";
import { Navbar } from "../components/Navbar";
import { ProfileCard } from "../components/ProfileCard";
import { GetPosts } from "../hooks/getPosts";
import { GetUser } from "../hooks/getUser";

export const Home = () => {
  const { user } = GetUser();
  const { posts } = GetPosts();

  if (!user) return null;

  return (
    <>
      <Navbar profileImage={user?.picturePath} />

      <Grid templateColumns="repeat(3,1fr)">
        <ProfileCard user={user} />
        <Box>
          <MyPost userImage={user.picturePath} />
          <Feed posts={posts} />
        </Box>
      </Grid>
    </>
  );
};
