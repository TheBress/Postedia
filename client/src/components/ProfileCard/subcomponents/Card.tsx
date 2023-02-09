import { Box, Flex, Text } from "@chakra-ui/react";
import { MdLocationPin, MdWork } from "react-icons/md";
import { useSelector } from "react-redux";
import { InitialState, User } from "../../../types";
import { SocialMedia } from "./SocialMedia";

interface Props {
  profileUser?: User;
}

export const Card = ({ profileUser }: Props) => {
  const user = useSelector((state: InitialState) => state.user);

  const chosenUser = profileUser ? profileUser : user;

  return (
    <>
      <Box p="3" borderBottom="1px solid black">
        <Flex gap="20px" mb="2" alignItems="center">
          <MdLocationPin size="25" />
          <Text>
            {chosenUser.location ? chosenUser.location : "No location"}
          </Text>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <MdWork size="22" />
          <Text>
            {chosenUser.occupation ? chosenUser.occupation : "No occupation"}
          </Text>
        </Flex>
      </Box>

      <Box
        p="3"
        borderBottom={
          chosenUser.twitterUrl || chosenUser.linkedinUrl
            ? "1px solid black"
            : ""
        }
      >
        <Flex>
          <Text fontSize="0.9rem">Who´s viewed your profile</Text>
          <Text fontWeight="600" ml="auto">
            {chosenUser.viewedProfile?.length}
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="0.9rem">Impressions of your last post</Text>
          <Text ml="auto" fontWeight="600">
            {chosenUser.impressions}
          </Text>
        </Flex>
      </Box>

      {(chosenUser.twitterUrl || chosenUser.linkedinUrl) && (
        <Box p="3">
          <Text mb="2" fontSize="1.2rem" fontWeight="600">
            Social Profiles
          </Text>
          {chosenUser.twitterUrl && (
            <SocialMedia name="Twitter" url={chosenUser.twitterUrl} />
          )}
          {chosenUser.linkedinUrl && (
            <SocialMedia
              name="Linkedin"
              url={chosenUser.linkedinUrl}
              isLinkedin={true}
            />
          )}
        </Box>
      )}
    </>
  );
};
