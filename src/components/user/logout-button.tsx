import { FC } from "react";
import { useAppContext } from "../../middleware/context-provider";

export const LogOutButton: FC = () => {
  const dispatch = useAppContext()[1];
  const onLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <button className="btn-secondary-middle" onClick={onLogoutClick}>
        Log out
      </button>
    </>
  );
};