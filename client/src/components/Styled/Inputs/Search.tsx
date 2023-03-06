import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

interface Props {
  value: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ value, handleChange }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<MdSearch size="25" />}
      />
      <Input
        borderRadius="2rem"
        border="1px solid black"
        _hover={{ borderColor: "black" }}
        _focus={{ borderColor: "blue.100" }}
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </InputGroup>
  );
};
