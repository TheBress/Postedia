import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { capitalizeWord } from "../../functions";
import { Input } from "../../types";

export const InputBox = ({
  type,
  name,
  value,
  onChange,
  isPassword,
}: Input) => {
  const [isSeen, setIsSeen] = useState<boolean>(false);

  return (
    <div className="inputBox">
      <input
        required
        type={!isSeen ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
        className="input"
      />
      <span>{capitalizeWord(name)}</span>
      {isPassword && (
        <span
          className="iconInput"
          onClick={() => {
            setIsSeen(!isSeen);
          }}
        >
          {!isSeen ? (
            <AiOutlineEye size={25} />
          ) : (
            <AiOutlineEyeInvisible size={25} />
          )}
        </span>
      )}
    </div>
  );
};
