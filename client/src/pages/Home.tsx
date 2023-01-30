import { Grid } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { ProfileCard } from "../components/ProfileCard";
import { GetUser } from "../hooks/getUser";

export const Home = () => {
  const { user } = GetUser();

  if (!user) return null;

  return (
    <>
      <Navbar profileImage={user?.picturePath} />

      <Grid templateColumns="repeat(3,1fr)">
        <ProfileCard user={user} />
      </Grid>
    </>
  );
};
