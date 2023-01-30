import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { User } from "../types";
import { MdLocationPin, MdWork, MdModeEdit } from "react-icons/md";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

interface Props {
  user: User;
}

export const ProfileCard = ({ user }: Props) => {
  return (
    <Box background="white.200" m="10" p="5" borderRadius="5px">
      <Flex gap="20px" borderBottom="1px solid black" p="3">
        <Avatar size="lg" src={user.picturePath} />
        <Box>
          <Text fontWeight="600" fontSize="1.2rem">
            {user.firstName} {user.lastName}
          </Text>
          <Text fontSize="0.9rem">{user.friends.length} friends</Text>
        </Box>
      </Flex>

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

      <Box p="3">
        <Text mb="2" fontSize="1.2rem" fontWeight="600">
          Social Profiles
        </Text>
        <Flex mb="1" gap="3.5" alignItems="center">
          <BsTwitter size="20" />
          <Box>
            <Text fontWeight="600" fontSize="0.9rem">
              Twitter
            </Text>
            <Text fontSize="0.8rem">Social network</Text>
          </Box>
          <Box ml="auto">
            <MdModeEdit size="18" />
          </Box>
        </Flex>
        <Flex gap="3.5" alignItems="center">
          <BsLinkedin size="20" />
          <Box>
            <Text fontWeight="600" fontSize="0.9rem">
              Linkedin
            </Text>
            <Text fontSize="0.8rem">Social network</Text>
          </Box>
          <Box ml="auto">
            <MdModeEdit size="18" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
