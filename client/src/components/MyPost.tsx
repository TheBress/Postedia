import { Avatar, Box, Button, Flex, Input } from "@chakra-ui/react";

interface Props {
  userImage: string;
}

export const MyPost = ({ userImage }: Props) => {
  return (
    <Box background="white.200" m="10" p="5" borderRadius="5px">
      <Flex
        pb="5"
        alignItems="center"
        gap="10px"
        borderBottom="1px solid black"
      >
        <Avatar src={userImage} />
        <Input
          borderRadius="2rem"
          placeholder="What´s on your mind"
          name="textPost"
          border="1px solid black"
          _hover={{ borderColor: "black" }}
          _focus={{ borderColor: "blue.100" }}
        />
      </Flex>
      <Button
        mt="5"
        background="blue.100"
        _hover={{ background: "blue.200", color: "white" }}
        borderRadius="2rem"
      >
        Post
      </Button>
    </Box>
  );
};
