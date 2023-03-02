import { Box, Text } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { Notification as NotificationType } from "../../types";
import { NotificationContainer } from "../Styled/Containers/Notification";
import { useConnect } from "./connect";

interface Props {
  notification: NotificationType;
}

export const Notification = ({ notification }: Props) => {
  const { isEnter, setisEnter, deleteNotification, goProfile } = useConnect(
    undefined,
    notification
  );

  return (
    <NotificationContainer setIsEnter={setisEnter}>
      <Text cursor="pointer" onClick={goProfile}>
        {notification.message}
      </Text>
      <>
        {isEnter && (
          <Box ml="auto" pr="2" cursor="pointer" onClick={deleteNotification}>
            <AiFillDelete className="icon" size="20" />
          </Box>
        )}
      </>
    </NotificationContainer>
  );
};
