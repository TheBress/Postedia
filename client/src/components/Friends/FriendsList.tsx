import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Friend } from ".";
import { FriendsContainer } from "../Styled/Containers/Friends";
import { useConnect } from "./connect";

interface Props {
  userId: string;
}

export const FriendsList = ({ userId }: Props) => {
  const { getFriends, friends } = useConnect("", userId);

  useEffect(() => {
    getFriends();
  }, [userId]);

  return (
    <FriendsContainer>
      <Text fontWeight="600" fontSize="1.2rem">
        {friends.length ? "Friends list" : "No friends"}
      </Text>
      <>
        {friends.map((friend, index) => (
          <Friend
            friendID={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            userPicturePath={friend.picturePath}
            subtitle={friend.occupation}
            key={index}
            myKey={index}
            userId={userId}
            mt="4"
          />
        ))}
      </>
    </FriendsContainer>
  );
};
