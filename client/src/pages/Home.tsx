import { Navbar } from "../components/Navbar";
import { GetUser } from "../hooks/getUser";

export const Home = () => {
  const { user } = GetUser();

  if (!user) return null;

  return (
    <>
      <Navbar profileImage={user?.picturePath} />
    </>
  );
};
