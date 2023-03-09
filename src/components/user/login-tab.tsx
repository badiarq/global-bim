import { FC } from "react";
import { LogoLg } from "../logo/logo-lg";
import { PopupContainer } from "../popup-container"
import { LogInButton } from "./login-button";
import { LogOutButton } from "./logout-button";

// export const LoginTab: FC = () => {
export const LoginTab:FC = () => {
  return (
    <>
      <PopupContainer backgroundColor="bg-dark">
        <div className="card-body flex-auto ">
          <LogoLg />
          <div className="bg-gray-200 my-5 p-3 rounded-xl grid grid-cols-2 gap-3">
            <LogInButton />
            <LogOutButton />
          </div>
          <LogOutButton />
        </div>
      </PopupContainer>
    </>
  );
};