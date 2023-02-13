import { Flex } from "@chakra-ui/react";
import { PostButton } from "../../Styled/Buttons/Post";
import { PostInput } from "../../Styled/Inputs/Post";
import { useConnect } from "./connect";

interface Props {
  postId: string;
}

export const Form = ({ postId }: Props) => {
  const { handleChange, handleSubmit, comment } = useConnect(postId);

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="10px" pb="4">
        <PostInput
          name="comment"
          value={comment.comment}
          placeholder="Add a comment"
          handleChange={handleChange}
        />

        <PostButton description={comment.comment} text="Add" />
      </Flex>
    </form>
  );
};
