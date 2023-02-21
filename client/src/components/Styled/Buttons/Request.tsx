import { Button } from "@chakra-ui/react";

interface Props {
  text: string;
  isAccept?: boolean;
  handleClick?: () => void;
}

export const RequestButton = ({ text, isAccept, handleClick }: Props) => {
  return (
    <Button
      p="3"
      bg={isAccept ? "blue.100" : "white.100"}
      _hover={
        isAccept ? { bg: "blue.100", color: "white" } : { bg: "white.200" }
      }
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
