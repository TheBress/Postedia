import { Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

export const SearchText = ({ text }: Props) => {
  return (
    <Text mb="3" fontWeight="600" fontSize="1.4rem">
      {text}
    </Text>
  );
};
