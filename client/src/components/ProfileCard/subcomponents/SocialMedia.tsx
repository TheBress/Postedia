import { Flex, Text } from "@chakra-ui/react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { goTo } from "../../../functions";

interface Props {
  name: string;
  isLinkedin?: boolean;
  url: string;
}

export const SocialMedia = ({ name, isLinkedin, url }: Props) => {
  return (
    <Flex mb="3" gap="3.5" alignItems="center">
      {isLinkedin ? <BsLinkedin size="20" /> : <BsTwitter size="20" />}

      <Text
        onClick={() => {
          goTo(url);
        }}
        _hover={{ textDecoration: "underline" }}
        fontWeight="600"
        fontSize="0.9rem"
        cursor="pointer"
      >
        {name}
      </Text>
    </Flex>
  );
};
