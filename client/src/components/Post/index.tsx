import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { Post as PostType } from "../../types";
import { Friend } from "../Friends";
import { ActionsContainer } from "../Styled/Containers/Actions";
import { Comments } from "./Comments";
import { useConnect } from "./connect";
import { UpdateForm } from "./UpdateForm";
import { MdModeEdit } from "react-icons/md";

interface Props {
  post: PostType;
  myKey: number;
  userId?: string;
}

export const Post = ({ post, myKey, userId }: Props) => {
  const {
    fullName,
    likeCount,
    likePost,
    isLiked,
    isComment,
    changeIsComment,
    updatedAt,
    isUpdate,
    setisUpdate,
    goToPost,
  } = useConnect(post);

  return (
    <Box key={myKey} background="white" p="6" borderRadius="10px" mb="5">
      <Friend
        isUpdate={isUpdate}
        userId={userId}
        name={fullName}
        friendID={post.userId}
        userPicturePath={post.userPicturePath}
        subtitle={post.location}
        setisUpdate={setisUpdate}
      />

      {isUpdate ? (
        <UpdateForm
          postDescription={post.description}
          id={post._id}
          setIsUpdate={setisUpdate}
        />
      ) : (
        <Text cursor="pointer" onClick={goToPost} mt="4">
          {post.description}
        </Text>
      )}

      {post.picturePath && <Image src={post.picturePath} />}

      <Flex pt="2" gap="5" alignItems="center">
        <ActionsContainer onClickAction={likePost}>
          {!isLiked ? <AiOutlineHeart /> : <AiFillHeart color="#3a9dc7" />}
          <Text>{likeCount}</Text>
        </ActionsContainer>

        <ActionsContainer onClickAction={changeIsComment}>
          <VscComment />
          <Text>{post.comments.length}</Text>
        </ActionsContainer>
      </Flex>

      {isComment && <Comments comments={post.comments} postId={post._id} />}

      <Flex
        justifyContent="flex-end"
        alignItems="center"
        gap="5px"
        mt={isComment ? "10px" : ""}
      >
        {post.isEdited && <MdModeEdit size="10" />}
        <Text fontSize="0.7rem">{updatedAt}</Text>
      </Flex>
    </Box>
  );
};
