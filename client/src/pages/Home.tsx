import { Box } from "@chakra-ui/react";
import { Ad } from "../components/Ad";
import { FriendsList } from "../components/Friends/subcomponents/FriendsList";
import { Feed } from "../components/Feed";
import { Navbar } from "../components/Styled/Navbar";
import { ProfileCard } from "../components/ProfileCard";
import { GeneralContainer } from "../components/Styled/Containers/General";
import { NewPost } from "../components/Post/MyPost";
import { GetStates } from "../functions";

export const Home = () => {
  const { user } = GetStates();

  return (
    <>
      <Navbar />

      <GeneralContainer>
        <ProfileCard />
        <Box>
          <NewPost />
          <Feed showFeed />
        </Box>
        <Box>
          <Ad userId={user._id} />
          <FriendsList showFriendsList userId={user._id} />
        </Box>
      </GeneralContainer>
    </>
  );
};
