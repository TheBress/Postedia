import { Box } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const ProfileContainer = ({ isEdited, children }: ChildrenProps) => {
  return (
    <Box
      background="white.200"
      m="10"
      p="5"
      borderRadius="5px"
      maxHeight={!isEdited ? "50vh" : "67vh"}
    >
      {children}
    </Box>
  );
};
