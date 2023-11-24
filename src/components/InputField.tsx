/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Label from "./Label";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputStyle = css`
  margin: 10px 0;
  display: block;
`;

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        css={inputStyle}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
