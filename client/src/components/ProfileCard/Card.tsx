import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { MdLocationPin, MdWork, MdModeEdit } from "react-icons/md";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { User } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  user: User;
}

export const Card = ({ user }: Props) => {
  return (
    <>
      <Box p="3" borderBottom="1px solid black">
        <Flex gap="20px" mb="1" alignItems="center">
          <MdLocationPin size="25" />
          <Text>{user.location}</Text>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <MdWork size="22" />
          <Text>{user.occupation}</Text>
        </Flex>
      </Box>

      <Box p="3" borderBottom="1px solid black">
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

      {user.twitterUrl || user.linkedinUrl ? (
        <Box p="3">
          <Text mb="2" fontSize="1.2rem" fontWeight="600">
            Social Profiles
          </Text>
          {user.twitterUrl && (
            <Flex mb="1" gap="3.5" alignItems="center">
              <BsTwitter size="20" />

              <Text fontWeight="600" fontSize="0.9rem">
                Twitter
              </Text>
            </Flex>
          )}
          {user.linkedinUrl && (
            <Flex gap="3.5" alignItems="center">
              <BsLinkedin size="20" />

              <Text fontWeight="600" fontSize="0.9rem">
                Linkedin
              </Text>
            </Flex>
          )}
        </Box>
      ) : null}
    </>
  );
};
