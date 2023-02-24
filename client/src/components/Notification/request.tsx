import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Request as RequestType } from "../../types";
import { RequestButton } from "../Styled/Buttons/Request";
import { RequestContainer } from "../Styled/Containers/Request";
import { useConnect } from "./connect";

interface Props {
  request: RequestType;
}

export const Request = ({ request }: Props) => {
  const { deleteRequest, goProfile, acceptRequest } = useConnect(request);

  return (
    <RequestContainer>
      <Avatar cursor="pointer" onClick={goProfile} src={request.userImage} />

      <Box>
        <Text mb="1">{request.message}</Text>
        <Flex gap="2">
          <RequestButton handleClick={acceptRequest} text="Accept" isAccept />
          <RequestButton handleClick={deleteRequest} text="Delete" />
        </Flex>
      </Box>
    </RequestContainer>
  );
};
