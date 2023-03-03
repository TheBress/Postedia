import { Text } from "@chakra-ui/react";
import { NotFoundContainer } from "../components/Styled/Containers/NotFound";
import { Navbar } from "../components/Styled/Navbar";

export const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <NotFoundContainer>
        <Text fontSize={{ lg: "4rem", sm: "2rem", base: "1rem" }} color="white">
          Error 404 - Page Not Found
        </Text>
      </NotFoundContainer>
    </>
  );
};
