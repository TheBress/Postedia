import { Text } from "@chakra-ui/react";

interface Props {
  totalNotifications: number;
}

export const NotificationsText = ({ totalNotifications }: Props) => {
  return (
    <Text position="relative" right="1px" top="10px" fontWeight="600">
      {totalNotifications}
    </Text>
  );
};
