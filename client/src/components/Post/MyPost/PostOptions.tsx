import { Flex, Text } from "@chakra-ui/react";
import { BsImage } from "react-icons/bs";
import { AiOutlineLink, AiOutlineGif } from "react-icons/ai";
import { FlexContainer } from "../../Styled/Containers/Flex";
import { PostButton } from "../../Styled/Buttons/Post";

interface Props {
  description: string;
}

export const PostOptions = ({ description }: Props) => {
  return (
    <Flex gap={{ xl: "4rem", sm: "3rem" }} pt="2">
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

      <PostButton description={description} text="Post" />
    </Flex>
  );
};
