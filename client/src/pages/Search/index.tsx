import { Ad } from "../../components/Ad";
import { SearchedUser } from "../../components/SearchedUser";
import { GeneralContainer } from "../../components/Styled/Containers/General";
import { PageContainer } from "../../components/Styled/Containers/Page";
import { SearchContainer } from "../../components/Styled/Containers/Search";
import { SearchInput } from "../../components/Styled/Inputs/Search";
import { Navbar } from "../../components/Styled/Navbar";
import { SearchText } from "../../components/Styled/Texts/Search";
import { useConnect } from "./connect";

export const Search = () => {
  const { usersFound, user, value, handleChange, height } = useConnect();

  return (
    <>
      <Navbar />
      <GeneralContainer>
        <PageContainer text="Search" />

        <SearchContainer height={height}>
          <SearchInput value={value} handleChange={handleChange} />
          {usersFound?.length ? (
            <>
              <SearchText text={`Users found (${usersFound.length}):`} />
              {usersFound.map((user, index) => (
                <SearchedUser searchedUser={user} key={index} />
              ))}
            </>
          ) : user.historial.length && !value ? (
            <>
              <SearchText text="Last searches:" />
              {user.historial.map((user, index) => (
                <SearchedUser searchedUser={user} isHistorial key={index} />
              ))}
            </>
          ) : (
            <SearchText text=" No results found." />
          )}
        </SearchContainer>

        <Ad userId={user._id} />
      </GeneralContainer>
    </>
  );
};
