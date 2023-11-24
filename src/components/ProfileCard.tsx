/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

interface ProfileCardProps {
  name: string;
  birthday: string;
  phoneNumber: string;
  photo: string;
}

const cardStyle = css`
  padding: 20px;
  max-width: 300px;
`;

const photoContainerStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const photoStyle = css`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  birthday,
  phoneNumber,
  photo,
}) => {
  return (
    <div css={cardStyle}>
      <div css={photoContainerStyle}>
        {photo && <img src={photo} alt="Profile" css={photoStyle} />}
      </div>
      <h3>{name}</h3>
      <p>{birthday}</p>
      <p>{phoneNumber}</p>
    </div>
  );
};

export default ProfileCard;
