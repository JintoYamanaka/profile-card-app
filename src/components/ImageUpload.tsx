/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Label from "./Label";

interface ImageUploadProps {
  label: string;
  onImageChange: (file: File | null) => void;
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const previewStyle = css`
  margin-top: 10px;
  max-width: 100%;
  height: auto;
`;

const ImageUpload: React.FC<ImageUploadProps> = ({ label, onImageChange }) => {
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPreviewUrl(URL.createObjectURL(file));
      onImageChange(file);
    } else {
      onImageChange(null);
    }
  };

  return (
    <div css={containerStyle}>
      <Label htmlFor="image-upload">{label}</Label>
      <input
        type="file"
        id="image-upload"
        onChange={handleImageChange}
        accept="image/*"
      />
    </div>
  );
};

export default ImageUpload;
