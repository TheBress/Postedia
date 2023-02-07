import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../components/Styled/Buttons/Submit";
import { AuthContainer } from "../../components/Styled/Containers/Auth";
import { InputBox } from "../../components/Styled/Inputs/InputBox";
import { ErrorText } from "../../components/Styled/Texts/Error";
import { WelcomeText } from "../../components/Styled/Texts/Welcome";

import { useConnect } from "./connect";

export const Register = () => {
  const { registerUser, handleChange, error, handleSubmit } = useConnect();

  return (
    <AuthContainer>
      <WelcomeText />

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
          isPassword
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

        {error && <ErrorText error={error} />}

        <SubmitButton text="Register" />
      </form>
    </AuthContainer>
  );
};
