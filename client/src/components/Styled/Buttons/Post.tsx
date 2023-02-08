import { Button } from "@chakra-ui/react";

interface Props {
  text: string;
}

export const PostButton = ({ text }: Props) => {
  return (
    <Button
      background="blue.100"
      _hover={{ background: "blue.200", color: "white" }}
      borderRadius="2rem"
      type="submit"
    >
      {text}
    </Button>
  );
};
