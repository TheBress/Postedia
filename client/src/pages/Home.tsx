import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Ad } from "../components/Ad";
import { FriendsList } from "../components/Friends/FriendsList";
import { Feed } from "../components/Feed";
import { Navbar } from "../components/Styled/Navbar";
import { ProfileCard } from "../components/ProfileCard";
import { InitialState } from "../types";
import { GeneralContainer } from "../components/Styled/Containers/General";
import { NewPost } from "../components/Post/MyPost";

export const Home = () => {
  const user = useSelector((state: InitialState) => state.user);

  return (
    <>
      <Navbar />

      <GeneralContainer>
        <ProfileCard user={user} />
        <Box>
          <NewPost />
          <Feed />
        </Box>
        <Box>
          <Ad />
          <FriendsList userId={user._id} />
        </Box>
      </GeneralContainer>
    </>
  );
};
