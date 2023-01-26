import { Input } from "@chakra-ui/react";

interface Props {
  text: string;
  type: string;
  name: string;
}

export const InputBox = ({ text, type, name }: Props) => {
  return (
    <div className="inputBox">
      <input required type={type} name={name} className="input" />
      <span>{text}</span>
    </div>
  );
};
