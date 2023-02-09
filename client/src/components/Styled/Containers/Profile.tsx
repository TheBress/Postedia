import { Box } from "@chakra-ui/react";
import { getMaxHeight } from "../../../functions";
import { ChildrenProps } from "../../../types/props";

export const ProfileContainer = ({
  isEdited,
  children,
  hasLinkedin,
  hasTwitter,
}: ChildrenProps) => {
  return (
    <Box
      background="white.200"
      m="10"
      p="5"
      borderRadius="5px"
      maxHeight={getMaxHeight(isEdited, hasLinkedin, hasTwitter)}
    >
      {children}
    </Box>
  );
};
