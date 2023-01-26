import { Text, Box } from "@chakra-ui/react";

export const NotFoundPage = () => {
  return (
    <Box
      background="black"
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={{ lg: "4rem", sm: "2rem", base: "1rem" }} color="white">
        Error 404 - Page Not Found
      </Text>
    </Box>
  );
};
