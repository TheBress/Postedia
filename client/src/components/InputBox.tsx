import { capitalizeWord } from "../functions";

interface Props {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ type, name, value, onChange }: Props) => {
  return (
    <div className="inputBox">
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="input"
      />
      <span>{capitalizeWord(name)}</span>
    </div>
  );
};
