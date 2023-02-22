import { Box, Flex, Text } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { Notification as NotificationType } from "../../types";
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
    <Flex
      onMouseOver={() => {
        setisEnter(true);
      }}
      onMouseOut={() => {
        setisEnter(false);
      }}
      alignItems="center"
      bg="white"
      mt="2"
      p="3"
      borderRadius="5px"
      gap="12px"
    >
      <Text cursor="pointer">{notification.message}</Text>
      {isEnter && (
        <Box cursor="pointer" onClick={deleteNotification}>
          <AiFillDelete className="icon" size="20" />
        </Box>
      )}
    </Flex>
  );
};
