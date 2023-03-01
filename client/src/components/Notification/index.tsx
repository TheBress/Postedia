import { Box, Text } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { Notification as NotificationType } from "../../types";
import { NotificationContainer } from "../Styled/Containers/Notification";
import { useConnect } from "./connect";

interface Props {
  notification: NotificationType;
}

export const Notification = ({ notification }: Props) => {
  const { isEnter, setisEnter, deleteNotification } = useConnect(
    undefined,
    notification
  );

  return (
    <NotificationContainer setIsEnter={setisEnter}>
      <Text cursor="pointer">{notification.message}</Text>
      <>
        {isEnter && (
          <Box cursor="pointer" onClick={deleteNotification}>
            <AiFillDelete className="icon" size="20" />
          </Box>
        )}
      </>
    </NotificationContainer>
  );
};
