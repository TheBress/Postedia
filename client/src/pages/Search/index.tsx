import { Box, Text } from "@chakra-ui/react";
import { Ad } from "../../components/Ad";
import { SearchedUser } from "../../components/SearchedUser";
import { GeneralContainer } from "../../components/Styled/Containers/General";
import { PageContainer } from "../../components/Styled/Containers/Page";
import { SearchInput } from "../../components/Styled/Inputs/Search";
import { Navbar } from "../../components/Styled/Navbar";
import { useConnect } from "./connect";

export const Search = () => {
  const { usersFound, user, value, handleChange } = useConnect();

  return (
    <>
      <Navbar />
      <GeneralContainer>
        <PageContainer text="Search" />

        <Box background="white.200" m="10" p="5" borderRadius="5px">
          <SearchInput value={value} handleChange={handleChange} />
          {usersFound?.length ? (
            usersFound.map((user) => <SearchedUser searchedUser={user} />)
          ) : (
            <Text fontWeight="600" fontSize="1.4rem">
              No users found.
            </Text>
          )}
        </Box>

        <Ad userId={user._id} />
      </GeneralContainer>
    </>
  );
};
