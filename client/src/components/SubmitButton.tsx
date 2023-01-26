import { Button } from "@chakra-ui/react";

interface Props {
  text: string;
}

export const SubmitButton = ({ text }: Props) => {
  return (
    <Button
      width={{ lg: "10vw", sm: "20vw" }}
      background="blue.100"
      color="primary.black"
      margin="auto"
      type="submit"
      fontSize="1.3rem"
      transition="0.3s"
      _hover={{ background: "blue.200", color: "white" }}
    >
      {text}
    </Button>
  );
};
