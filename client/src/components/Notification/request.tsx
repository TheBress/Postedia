import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Request as RequestType } from "../../types";
import { RequestButton } from "../Styled/Buttons/Request";
import { useConnect } from "./connect";

interface Props {
  request: RequestType;
}

export const Request = ({ request }: Props) => {
  const { deleteNotification } = useConnect(
    request._id,
    request.userReceivedId
  );

  return (
    <Flex
      mt="2"
      bg="white"
      p="3"
      borderRadius="5px"
      gap="2"
      alignItems="center"
    >
      <Avatar src={request.userImage} />

      <Box>
        <Text mb="1">{request.message}</Text>
        <Flex gap="2">
          <RequestButton text="Accept" isAccept />
          <RequestButton handleClick={deleteNotification} text="Delete" />
        </Flex>
      </Box>
    </Flex>
  );
};
