import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Friend } from ".";
import { useConnect } from "./connect";

interface Props {
  userId: string;
}

export const FriendsList = ({ userId }: Props) => {
  const { getFriends, friends } = useConnect("", userId);

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      {friends.length ? (
        <Box background="white.200" mt="3" m="10" p="5" borderRadius="5px">
          <Text fontWeight="600" fontSize="1.2rem">
            Friends list
          </Text>
          {friends.map((friend, index) => (
            <Friend
              friendID={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              userPicturePath={friend.picturePath}
              subtitle={friend.occupation}
              key={index}
              myKey={index}
            />
          ))}
        </Box>
      ) : null}
    </>
  );
};
