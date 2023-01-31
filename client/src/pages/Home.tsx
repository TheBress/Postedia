import { Box, Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import { Feed } from "../components/Feed";
import { MyPost } from "../components/MyPost";
import { Navbar } from "../components/Navbar";
import { ProfileCard } from "../components/ProfileCard";
import { InitialState } from "../types";

export const Home = () => {
  const user = useSelector((state: InitialState) => state.user);

  if (!user) return null;

  return (
    <>
      <Navbar profileImage={user.picturePath} />

      <Grid templateColumns="repeat(3,1fr)">
        <ProfileCard />
        <Box>
          <MyPost userImage={user.picturePath} />
          {/* <Feed posts={posts} /> */}
        </Box>
      </Grid>
    </>
  );
};
