import { Input } from "@chakra-ui/react";
import { capitalizeWord } from "../../../functions";
import { InputProps } from "../../../types/props";

export const UserInput = ({ type, name, value, onChange }: InputProps) => {
  return (
    <Input
      placeholder={capitalizeWord(name)}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      borderColor="black"
      borderRadius="2rem"
      mb="2"
      _hover={{ borderColor: "black" }}
      _focus={{ borderColor: "blue.100" }}
    />
  );
};
