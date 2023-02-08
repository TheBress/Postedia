import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { CommentUserText } from "../../Styled/Texts/Comment";

interface Props {
  comment: string;
  idUser: string;
  picturePath: string;
  fullName: string;
}

export const Comment = ({ comment, idUser, picturePath, fullName }: Props) => {
  return (
    <Box mb="3">
      <Flex gap="8px">
        <Avatar src={picturePath} size="sm" />
        <Box>
          <CommentUserText fullName={fullName} idUser={idUser} />
          <Text fontSize="0.9rem" position="relative" top="-3px">
            {comment}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
