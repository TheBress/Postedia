import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { SubmitButton } from "../components/SubmitButton";

export const Login = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      background="blue.100"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={{ lg: "40vw", md: "60vw", sm: "90vw" }}
        background="white.100"
        minHeight={{ lg: "52vh", base: "60vh" }}
        borderRadius="20px"
      >
        <Text
          textTransform="uppercase"
          fontWeight="600"
          textAlign="center"
          pt="8"
          fontSize="1.8rem"
        >
          Welcome to MERN Social network
        </Text>

        <form>
          <InputBox name="email" type="text" text="Email" />
          <InputBox name="password" type="password" text="Password" />

          <Text as="span" margin="auto" fontSize="0.9rem">
            If you don´t have an account create one
            <Link className="link" to="/register">
              clicking here.
            </Link>
          </Text>

          <SubmitButton text="Login" />
        </form>
      </Box>
    </Box>
  );
};
