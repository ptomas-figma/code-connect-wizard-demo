import React, { useState } from "react";

interface InputProps {
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ errorMessage }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label>
        <input type="text" value={value} onChange={handleChange} />
      </label>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
