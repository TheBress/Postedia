import { Flex } from "@chakra-ui/react";
import { PostButton } from "../../Styled/Buttons/Post";
import { PostInput } from "../../Styled/Inputs/Post";
import { useConnect } from "./connect";

interface Props {
  postDescription: string;
  id: string;
  setIsUpdate: (value: boolean) => void;
}

export const UpdateForm = ({ postDescription, id, setIsUpdate }: Props) => {
  const { updatePost, handleChange, handleSubmit } = useConnect(
    postDescription,
    id,
    setIsUpdate
  );
  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="10px" pt="4" pb="2">
        <PostInput
          placeholder="Update your post"
          name="description"
          value={updatePost.description}
          handleChange={handleChange}
        />
        <PostButton description={updatePost.description} text="Update" />
      </Flex>
    </form>
  );
};
