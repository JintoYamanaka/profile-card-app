/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const labelStyle = css`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label css={labelStyle} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;