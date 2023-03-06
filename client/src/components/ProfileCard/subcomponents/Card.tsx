import { Box, Flex, Text } from "@chakra-ui/react";
import { MdLocationPin, MdWork } from "react-icons/md";
import { User } from "../../../types";
import { useConnect } from "../connect";
import { SocialMedia } from "./SocialMedia";

interface Props {
  profileUser?: User;
}

export const Card = ({ profileUser }: Props) => {
  const { user, userInfo } = useConnect(profileUser);

  if (!user) return null;

  return (
    <>
      <Box p="3" borderBottom="1px solid black">
        <Flex gap="20px" mb="2" alignItems="center">
          <MdLocationPin size="25" />
          <Text>{user.location ? user.location : "No location"}</Text>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <MdWork size="22" />
          <Text>{user.occupation ? user.occupation : "No occupation"}</Text>
        </Flex>
      </Box>

      <Box
        p="3"
        borderBottom={
          user.twitterUrl || user.linkedinUrl ? "1px solid black" : ""
        }
      >
        <Flex>
          <Text fontSize="0.9rem">Who´s viewed your profile</Text>
          <Text fontWeight="600" ml="auto">
            {user.viewedProfile?.length}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="0.9rem">Total likes received</Text>
          <Text ml="auto" fontWeight="600">
            {userInfo.totalLikes}
          </Text>
        </Flex>
      </Box>

      {(user.twitterUrl || user.linkedinUrl) && (
        <Box p="3">
          <Text mb="2" fontSize="1.2rem" fontWeight="600">
            Social Profiles
          </Text>
          {user.twitterUrl && (
            <SocialMedia name="Twitter" url={user.twitterUrl} />
          )}
          {user.linkedinUrl && (
            <SocialMedia
              name="Linkedin"
              url={user.linkedinUrl}
              isLinkedin={true}
            />
          )}
        </Box>
      )}
    </>
  );
};
