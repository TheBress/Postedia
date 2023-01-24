import { Box, Text } from "@chakra-ui/layout";

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
      <Text fontSize="4rem" color="white">
        Error 404 - Page Not Found
      </Text>
    </Box>
  );
};
