import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };
  return (
    <div className="">
      <img src={user.profileImageUrl} alt="" className="" />
      <div>
        
      </div>
    </div>
  );
};

export default ProfileInfoCard;
