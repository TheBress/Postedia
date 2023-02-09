import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { formatDate } from "../../../functions";
import { CommentUserText } from "../../Styled/Texts/Comment";

interface Props {
  comment: string;
  idUser: string;
  picturePath: string;
  fullName: string;
  createdAt: string;
}

export const Comment = ({
  comment,
  idUser,
  picturePath,
  fullName,
  createdAt,
}: Props) => {
  return (
    <Box mb="3" position="relative">
      <Flex gap="8px">
        <Avatar src={picturePath} size="sm" />
        <Box>
          <CommentUserText fullName={fullName} idUser={idUser} />
          <Text fontSize="0.9rem" position="relative" top="-3px">
            {comment}
          </Text>
        </Box>
      </Flex>

      <Text
        position="absolute"
        whiteSpace="pre"
        right="0"
        top="0"
        fontSize="0.7rem"
      >
        {formatDate(createdAt)}
      </Text>
    </Box>
  );
};
