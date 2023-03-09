import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { Post as PostType } from "../../types";
import { Friend } from "../Friends";
import { ActionsContainer } from "../Styled/Containers/Actions";
import { Comments } from "./Comments";
import { useConnect } from "./connect";
import { UpdateForm } from "./UpdateForm";
import { MdModeEdit, MdShare } from "react-icons/md";

interface Props {
  post: PostType;
  myKey: number;
  userId?: string;
}

export const Post = ({ post, myKey, userId }: Props) => {
  const {
    postInfo,
    likePost,
    setisUpdate,
    goToPost,
    changeIsComment,
    copyToClipboard,
  } = useConnect(post);

  return (
    <Box key={myKey} background="white" p="6" borderRadius="10px" mb="5">
      <Friend
        isUpdate={postInfo.isUpdate}
        userId={userId}
        name={postInfo.fullName}
        friendID={post.userId}
        postId={post._id}
        userPicturePath={post.userPicturePath}
        subtitle={post.location}
        setisUpdate={setisUpdate}
      />

      {postInfo.isUpdate ? (
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
          {!postInfo.isLiked ? (
            <AiOutlineHeart className="icon" />
          ) : (
            <AiFillHeart color="#3a9dc7" />
          )}
          <Text>{postInfo.likeCount}</Text>
        </ActionsContainer>

        <ActionsContainer onClickAction={changeIsComment}>
          <VscComment className="icon" />
          <Text>{post.comments.length}</Text>
        </ActionsContainer>

        <ActionsContainer onClickAction={copyToClipboard}>
          <MdShare className="icon" />
          <Text>{post.timesShared}</Text>
        </ActionsContainer>
      </Flex>

      {postInfo.isComment && (
        <Comments comments={post.comments} postId={post._id} />
      )}

      <Flex
        justifyContent="flex-end"
        alignItems="center"
        gap="5px"
        mt={postInfo.isComment ? "10px" : ""}
      >
        {post.isEdited && <MdModeEdit size="10" />}
        <Text fontSize="0.7rem">{postInfo.updatedAt}</Text>
      </Flex>
    </Box>
  );
};
