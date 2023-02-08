import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { Post as PostType } from "../../types";
import { Friend } from "../Friends";
import { Comments } from "./Comments";
import { useConnect } from "./connect";

interface Props {
  post: PostType;
  myKey: number;
  userId?: string;
}

export const Post = ({ post, myKey, userId }: Props) => {
  const { fullName, likeCount, likePost, isLiked, isComment, changeIsComment } =
    useConnect(post);

  return (
    <Box key={myKey} background="white" p="6" borderRadius="10px" mb="5">
      <Friend
        userId={userId}
        name={fullName}
        friendID={post.userId}
        userPicturePath={post.userPicturePath}
        subtitle={post.location}
      />
      <Text mt="4">{post.description}</Text>
      {post.picturePath && <Image src={post.picturePath} />}

      <Flex pt="2" gap="5">
        <Flex
          _hover={{ color: "blue.100" }}
          alignItems="center"
          gap="1"
          cursor="pointer"
          onClick={likePost}
          transition="0.3s"
        >
          {!isLiked ? <AiOutlineHeart /> : <AiFillHeart color="#3a9dc7" />}
          <Text>{likeCount}</Text>
        </Flex>
        <Flex
          _hover={{ color: "blue.100" }}
          alignItems="center"
          gap="1"
          cursor="pointer"
          transition="0.3s"
          onClick={changeIsComment}
        >
          <VscComment />
          <Text>{post.comments.length}</Text>
        </Flex>
      </Flex>
      {isComment && <Comments comments={post.comments} postId={post._id} />}
    </Box>
  );
};
