import { Text } from "@chakra-ui/react";
import { Friend } from "..";
import { getFriendsListName } from "../../../functions";
import { FriendsContainer } from "../../Styled/Containers/Friends";
import { useConnect } from "../connect";

interface Props {
  userId: string;
}

export const FriendsList = ({ userId }: Props) => {
  const { friends, _id } = useConnect("", userId);

  return (
    <FriendsContainer>
      <Text fontWeight="600" fontSize="1.2rem">
        {getFriendsListName(friends.length, userId, _id)}
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
