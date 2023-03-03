import { Box, Flex, Text } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { Notification as NotificationType } from "../../types";
import { NotificationContainer } from "../Styled/Containers/Notification";
import { useConnect } from "./connect";
import { GoMailRead } from "react-icons/go";

interface Props {
  notification: NotificationType;
}

export const Notification = ({ notification }: Props) => {
  const { isEnter, setisEnter, deleteNotification, goProfile, markAsRead } =
    useConnect(undefined, notification);

  return (
    <NotificationContainer setIsEnter={setisEnter}>
      <Text cursor="pointer" onClick={goProfile}>
        {notification.message}
      </Text>
      <>
        {isEnter && (
          <Flex ml="auto" pr="2" gap="2">
            {!notification.isRead && (
              <Box cursor="pointer" onClick={markAsRead}>
                <GoMailRead className="icon" size="20" />
              </Box>
            )}
            <Box cursor="pointer" onClick={deleteNotification}>
              <AiFillDelete className="icon" size="20" />
            </Box>
          </Flex>
        )}
      </>
    </NotificationContainer>
  );
};
