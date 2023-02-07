import { Flex, Image, Text } from "@chakra-ui/react";
import { AdContainer } from "./Styled/Containers/Ad";

export const Ad = () => {
  return (
    <AdContainer>
      <Flex alignItems="center">
        <Text fontSize="1.2rem" fontWeight="600">
          Sponsored
        </Text>
        <Text fontSize="0.9rem" ml="auto">
          Create ad
        </Text>
      </Flex>
      <Image
        mt="2"
        borderRadius="0.75rem"
        src="https://www.velfix.es/wp-content/uploads/2021/10/2a5b.jpg"
      />
      <Flex mt="2">
        <Text fontWeight="600">Zalando</Text>
        <Text fontSize="0.9rem" ml="auto">
          zalando.es
        </Text>
      </Flex>
    </AdContainer>
  );
};
