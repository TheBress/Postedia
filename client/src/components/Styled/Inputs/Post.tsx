import { Input } from "@chakra-ui/react";

interface Props {
  value: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
}

export const PostInput = ({
  value,
  handleChange,
  placeholder,
  name,
}: Props) => {
  return (
    <Input
      borderRadius="2rem"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      border="1px solid black"
      _hover={{ borderColor: "black" }}
      _focus={{ borderColor: "blue.100" }}
    />
  );
};
