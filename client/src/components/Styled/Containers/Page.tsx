import { Flex, Text } from "@chakra-ui/react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useConnect } from "../../../pages/Post/connect";

interface Props {
  text: string;
}

export const PageContainer = ({ text }: Props) => {
  const { goBack } = useConnect();

  return (
    <Flex
      maxHeight="10vh"
      background="white.200"
      m="10"
      p="5"
      borderRadius="5px"
      alignItems="center"
      gap="3"
    >
      <BiLeftArrowAlt className="icon" size="28" onClick={goBack} />
      <Text fontWeight="600" fontSize="1.5rem">
        {text}
      </Text>
    </Flex>
  );
};
