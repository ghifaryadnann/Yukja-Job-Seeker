import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Profile = () => {
  const { state } = useContext(GlobalContext);
  const { user } = state;

  return (
    <div className="content md:px-[3rem] px-0 mt-0 md:-mt-9">
      <h4 className="text-2xl font-medium mb-3">Profile</h4>
      <div className="flex items-center w-full space-x-4 md:w-1/2 mt-2">
        <div className="w-full">
          <div className="relative max-w-lg px-4 py-6 bg-white shadow-l6 text-center">
            <img
              src={user.image_url}
              alt="image profil"
              className="w-16 h-16 rounded-full object-cover object-center absolute -top-[20%] left-1/2 -translate-x-1/2 border-2 p-1"
            />
            <h4 className="font-medium text-xl mt-4">{user.name}</h4>
            <p className="font-light text-sm">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
