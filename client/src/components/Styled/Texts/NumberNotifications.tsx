import { Text } from "@chakra-ui/react";

interface Props {
  totalNotifications: number;
}

export const NotificationsText = ({ totalNotifications }: Props) => {
  return (
    <Text position="absolute" top="3.8%" right="7.4%" fontWeight="600">
      {totalNotifications}
    </Text>
  );
};
