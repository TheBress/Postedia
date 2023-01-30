import { Avatar, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { MdLocationPin, MdWork, MdModeEdit } from "react-icons/md";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { UpdatedUser, User } from "../../types";
import { useConnect } from "./connect";
import { UserInput } from "../Inputs/UserInput";

interface Props {
  user: UpdatedUser;
}

export const Form = ({ user }: Props) => {
  const { updatedUser, handleChange, handleSubmit } = useConnect(user);

  return (
    <form className="user" onSubmit={handleSubmit}>
      <Box p="3" borderBottom="1px solid black">
        <Flex gap="20px" mb="1" alignItems="center">
          <MdLocationPin size="25" />
          <UserInput
            value={updatedUser.location}
            name="location"
            type="text"
            onChange={handleChange}
          />
        </Flex>
        <Flex gap="20px" alignItems="center">
          <MdWork size="22" />
          <UserInput
            value={updatedUser.occupation}
            name="occupation"
            type="text"
            onChange={handleChange}
          />
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

          <UserInput
            value={updatedUser.twitterUrl}
            name="twitterUrl"
            type="text"
            onChange={handleChange}
          />
        </Flex>
        <Flex gap="3.5" alignItems="center">
          <BsLinkedin size="20" />
          <UserInput
            value={updatedUser.linkedinUrl}
            name="linkedinUrl"
            type="text"
            onChange={handleChange}
          />
        </Flex>
      </Box>

      <Button type="submit" mr="right">
        Save changes
      </Button>
    </form>
  );
};
