import { capitalizeWord } from "../../functions";
import { Input } from "../../types";

export const InputBox = ({ type, name, value, onChange }: Input) => {
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
