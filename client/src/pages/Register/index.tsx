import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InputBox } from "../../components/InputBox";
import { SubmitButton } from "../../components/SubmitButton";
import { useConnect } from "./connect";

export const Register = () => {
  const { registerUser, handleChange, error, handleSubmit } = useConnect();

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
        minHeight="72vh"
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
            value={registerUser.email}
            name="email"
            type="text"
            onChange={handleChange}
          />
          <InputBox
            value={registerUser.password}
            name="password"
            type="password"
            onChange={handleChange}
          />
          <InputBox
            value={registerUser.firstName}
            name="firstName"
            type="text"
            onChange={handleChange}
          />
          <InputBox
            value={registerUser.lastName}
            name="lastName"
            type="text"
            onChange={handleChange}
          />

          <Text pb="2" as="span" margin="auto" fontSize="0.9rem">
            If you already have an account
            <Link className="link" to="/login">
              logging in here.
            </Link>
          </Text>

          {error && (
            <Text pb="2" color="red" as="span" margin="auto" fontSize="0.9rem">
              {error}
            </Text>
          )}

          <SubmitButton text="Register" />
        </form>
      </Box>
    </Box>
  );
};
