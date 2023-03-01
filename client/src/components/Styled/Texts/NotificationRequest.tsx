import { Text } from "@chakra-ui/react";

interface Props {
  text: string;
  number: number;
}

export const NotificationRequestText = ({ text, number }: Props) => {
  return (
    <Text fontWeight="600" fontSize="1.3rem">
      {text} ({number})
    </Text>
  );
};
