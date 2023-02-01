import { Box, Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Ad } from "../components/Ad";
import { FriendsList } from "../components/Friends/FriendsList";
import { Feed } from "../components/Feed";
import { NewPost } from "../components/MyPost";
import { Navbar } from "../components/Navbar";
import { ProfileCard } from "../components/ProfileCard";
import { InitialState } from "../types";

export const Home = () => {
  const user = useSelector((state: InitialState) => state.user);

  if (!user) return null;

  return (
    <>
      <Navbar />

      <Grid templateColumns="repeat(3,1fr)">
        <ProfileCard />
        <Box>
          <NewPost />
          <Feed />
        </Box>
        <Box>
          <Ad />
          <FriendsList userId={user._id} />
        </Box>
      </Grid>
    </>
  );
};
