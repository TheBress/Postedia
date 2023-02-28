import { Box } from "@chakra-ui/react";
import { Ad } from "../../components/Ad";
import { Feed } from "../../components/Feed";
import { FriendsList } from "../../components/Friends/subcomponents/FriendsList";
import { Navbar } from "../../components/Styled/Navbar";
import { ProfileCard } from "../../components/ProfileCard";
import { GeneralContainer } from "../../components/Styled/Containers/General";
import { useConnect } from "./connect";

export const Profile = () => {
  const { user, isShow } = useConnect();

  if (!user) return null;

  return (
    <>
      <Navbar />

      <GeneralContainer>
        <ProfileCard user={user} />
        <Feed showFeed={isShow} userId={user._id} />
        <Box>
          <Ad userId={user._id} />
          {isShow && <FriendsList userId={user._id} />}
        </Box>
      </GeneralContainer>
    </>
  );
};
