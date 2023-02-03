import { Box, Grid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Ad } from "../../components/Ad";
import { Feed } from "../../components/Feed";
import { FriendsList } from "../../components/Friends/FriendsList";
import { Navbar } from "../../components/Navbar";
import { ProfileCard } from "../../components/ProfileCard";
import { useConnect } from "./connect";

export const Profile = () => {
  const { userId } = useParams();

  const { user } = useConnect(userId);

  if (!user) return null;

  return (
    <>
      <Navbar />

      <Grid templateColumns="repeat(3,1fr)">
        <ProfileCard user={user} />
        <Feed userId={user._id} />
        <Box>
          <Ad />
          <FriendsList userId={user._id} />
        </Box>
      </Grid>
    </>
  );
};
