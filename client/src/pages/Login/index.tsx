import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InputBox } from "../../components/Inputs/InputBox";
import { SubmitButton } from "../../components/SubmitButton";
import { useConnect } from "./connect";

export const Login = () => {
  const { loginUser, handleChange, handleSubmit, error } = useConnect();

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
        minHeight="50vh"
        borderRadius="20px"
      >
        <Text
          textTransform="uppercase"
          fontWeight="600"
          textAlign="center"
          pt="8"
          fontSize="1.8rem"
        >
          Welcome to Postedia
        </Text>

        <form className="register" onSubmit={handleSubmit}>
          <InputBox
            value={loginUser.email}
            name="email"
            type="text"
            onChange={handleChange}
          />
          <InputBox
            value={loginUser.password}
            name="password"
            type="password"
            onChange={handleChange}
          />

          <Text pb="2" as="span" margin="auto" fontSize="0.9rem">
            If you don´t have an account create one
            <Link className="link" to="/register">
              clicking here.
            </Link>
          </Text>

          {error && (
            <Text pb="2" color="red" as="span" margin="auto" fontSize="0.9rem">
              {error}
            </Text>
          )}

          <SubmitButton text="Login" />
        </form>
      </Box>
    </Box>
  );
};
