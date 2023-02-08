import { Box } from "@chakra-ui/react";
import { Comment as CommentType } from "../../../types";
import { Comment } from "./comment";
import { Form } from "./form";

interface Props {
  comments: CommentType[];
  postId: string;
}

export const Comments = ({ comments, postId }: Props) => {
  return (
    <Box background="white.200" p="4" borderRadius="10px" mt="2">
      <Form postId={postId} />
      {comments.length
        ? comments.map((comment) => (
            <Comment
              comment={comment.comment}
              picturePath={comment.user.picturePath}
              idUser={comment.user._id}
              fullName={`${comment.user.firstName} ${comment.user.lastName}`}
            />
          ))
        : "No comments"}
    </Box>
  );
};
