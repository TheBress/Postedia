import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../components/Styled/Buttons/Submit";
import { AuthContainer } from "../../components/Styled/Containers/Auth";
import { InputBox } from "../../components/Styled/Inputs/InputBox";
import { ErrorText } from "../../components/Styled/Texts/Error";
import { WelcomeText } from "../../components/Styled/Texts/Welcome";

import { useConnect } from "./connect";

export const Login = () => {
  const { loginUser, handleChange, handleSubmit, error } = useConnect();

  return (
    <AuthContainer>
      <WelcomeText />

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
          isPassword
        />

        <Text pb="2" as="span" margin="auto" fontSize="0.9rem">
          If you don´t have an account create one
          <Link className="link" to="/register">
            clicking here.
          </Link>
        </Text>

        {error && <ErrorText error={error} />}

        <SubmitButton text="Login" />
      </form>
    </AuthContainer>
  );
};
