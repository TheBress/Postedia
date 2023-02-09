import { Flex, Image, Text } from "@chakra-ui/react";
import { randomAd } from "../functions";
import { Ad as AdType } from "../types";
import { AdContainer } from "./Styled/Containers/Ad";

export const Ad = () => {
  const ad: AdType = randomAd();

  if (!ad) return null;

  return (
    <AdContainer url={ad.url}>
      <Flex alignItems="center">
        <Text fontSize="1.2rem" fontWeight="600">
          Sponsored
        </Text>
        <Text fontSize="0.9rem" ml="auto">
          Create ad
        </Text>
      </Flex>
      <Image mt="2" borderRadius="0.75rem" src={ad.image} />
      <Flex mt="2">
        <Text fontWeight="600">{ad.name}</Text>
        <Text fontSize="0.9rem" ml="auto">
          {ad.nameUrl}
        </Text>
      </Flex>
    </AdContainer>
  );
};
