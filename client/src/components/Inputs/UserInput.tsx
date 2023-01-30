import { Input } from "@chakra-ui/react";
import { capitalizeWord } from "../../functions";
import { Input as InputTs } from "../../types";

export const UserInput = ({ type, name, value, onChange }: InputTs) => {
  return (
    <Input
      placeholder={capitalizeWord(name)}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};
