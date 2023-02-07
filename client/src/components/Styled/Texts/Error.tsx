import { Text } from "@chakra-ui/react";

interface Props {
  error: string;
}

export const ErrorText = ({ error }: Props) => {
  return (
    <Text pb="2" color="red" as="span" margin="auto" fontSize="0.9rem">
      {error}
    </Text>
  );
};
