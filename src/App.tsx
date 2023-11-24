/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

interface UserProfile {
  name: string;
  birthday: string;
  phoneNumber: string;
  photo: string;
}

const labelStyle = css`
  margin-bottom: 5px;
  font-weight: bold;
`;

const inputStyle = css`
  margin: 10px 0;
  display: block;
`;

const App = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    birthday: "",
    phoneNumber: "",
    photo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      setUserProfile({ ...userProfile, photo: URL.createObjectURL(imageFile) });
    }
  };

  return (
    <div>
      <label css={labelStyle} htmlFor="name">
        名前
      </label>
      <input
        css={inputStyle}
        id="name"
        type="text"
        name="name"
        onChange={handleInputChange}
        placeholder="Name"
      />

      <label css={labelStyle} htmlFor="birthday">
        誕生日
      </label>
      <input
        css={inputStyle}
        id="birthday"
        type="date"
        name="birthday"
        onChange={handleInputChange}
      />

      <label css={labelStyle} htmlFor="phoneNumber">
        電話番号
      </label>
      <input
        css={inputStyle}
        id="phoneNumber"
        type="text"
        name="phoneNumber"
        onChange={handleInputChange}
        placeholder="Phone Number"
      />

      <label css={labelStyle} htmlFor="photo">
        プロフィール写真
      </label>
      <input
        css={inputStyle}
        id="photo"
        type="file"
        onChange={handleImageChange}
      />

      {userProfile.photo && <img src={userProfile.photo} alt="Profile" />}
      {/* ここにダウンロード機能を実装 */}
    </div>
  );
};

export default App;
