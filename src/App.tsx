/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import InputField from "./components/InputField";
import ImageUpload from "./components/ImageUpload";

interface UserProfile {
  name: string;
  birthday: string;
  phoneNumber: string;
  photo: string;
}

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

  const handleImageChange = (file: File | null) => {
    if (file) {
      setUserProfile({ ...userProfile, photo: URL.createObjectURL(file) });
    } else {
      setUserProfile({ ...userProfile, photo: "" });
    }
  };

  return (
    <div>
      <InputField
        label="名前"
        type="text"
        name="name"
        value={userProfile.name}
        onChange={handleInputChange}
      />
      <InputField
        label="誕生日"
        type="date"
        name="birthday"
        value={userProfile.birthday}
        onChange={handleInputChange}
      />
      <InputField
        label="電話番号"
        type="text"
        name="phoneNumber"
        value={userProfile.phoneNumber}
        onChange={handleInputChange}
      />
      <ImageUpload label="プロフィール写真" onImageChange={handleImageChange} />
      {/* ここにダウンロード機能を実装 */}
      {userProfile.photo && (
        <img src={userProfile.photo} alt="Profile Preview" />
      )}
    </div>
  );
};

export default App;
