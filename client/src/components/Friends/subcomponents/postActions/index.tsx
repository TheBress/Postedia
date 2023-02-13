import { Box, Flex } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";

import { MdModeEdit } from "react-icons/md";
import { useConnect } from "./connect";

interface Props {
  postId?: string;
  isUpdate?: boolean;
  setisUpdate?: (value: boolean) => void;
}

export const PostActions = ({ postId, isUpdate, setisUpdate }: Props) => {
  const { deletePost, isPost } = useConnect(postId);

  return (
    <Flex ml="auto" gap="3">
      {!isPost && (
        <Box cursor="pointer" onClick={deletePost}>
          <AiFillDelete className="icon" size="20" />
        </Box>
      )}
      <Box
        cursor="pointer"
        onClick={() => {
          if (setisUpdate) setisUpdate(!isUpdate);
        }}
      >
        <MdModeEdit className="icon" size="20" />
      </Box>
    </Flex>
  );
};
