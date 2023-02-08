import { Text } from "@chakra-ui/react";
import { useConnect } from "../../Post/Comments/connect";

interface Props {
  fullName: string;
  idUser: string;
}

export const CommentUserText = ({ fullName, idUser }: Props) => {
  const { goToProfile } = useConnect();

  return (
    <Text
      cursor="pointer"
      _hover={{ color: "blue.100" }}
      transition="0.2s"
      fontWeight="600"
      position="relative"
      top="-4px"
      fontSize="0.8rem"
      onClick={() => {
        goToProfile(idUser);
      }}
    >
      {fullName}
    </Text>
  );
};
