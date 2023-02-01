import { Button, Flex, Text } from "@chakra-ui/react";
import { BsImage } from "react-icons/bs";
import { AiOutlineLink, AiOutlineGif } from "react-icons/ai";
import { FlexContainer } from "./FlexFiles";

export const PostOptions = () => {
  return (
    <Flex gap="4rem" pt="2">
      <FlexContainer>
        <BsImage />
        <Text>Image</Text>
      </FlexContainer>

      <FlexContainer>
        <AiOutlineLink />
        <Text>Link</Text>
      </FlexContainer>

      <FlexContainer>
        <AiOutlineGif />
        <Text>Gif</Text>
      </FlexContainer>

      <Button
        background="blue.100"
        _hover={{ background: "blue.200", color: "white" }}
        borderRadius="2rem"
        type="submit"
      >
        Post
      </Button>
    </Flex>
  );
};
