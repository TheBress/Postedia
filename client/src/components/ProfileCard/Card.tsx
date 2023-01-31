import { Box, Flex, Text } from "@chakra-ui/react";
import { MdLocationPin, MdWork } from "react-icons/md";
import { User } from "../../types";
import { SocialMedia } from "../SocialMedia";

interface Props {
  user: User;
}

export const Card = ({ user }: Props) => {
  return (
    <>
      <Box p="3" borderBottom="1px solid black">
        <Flex gap="20px" mb="2" alignItems="center">
          <MdLocationPin size="25" />
          <Text>{user.location}</Text>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <MdWork size="22" />
          <Text>{user.occupation}</Text>
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
            {user.viewedProfile}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="0.9rem">Impressions of your last post</Text>
          <Text ml="auto" fontWeight="600">
            {user.impressions}
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
