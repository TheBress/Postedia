import { Box, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

export const PageContainer = ({ text }: Props) => {
  return (
    <Box
      maxHeight="10vh"
      background="white.200"
      m="10"
      p="5"
      borderRadius="5px"
    >
      <Text fontWeight="600" fontSize="1.5rem">
        {text}
      </Text>
    </Box>
  );
};
