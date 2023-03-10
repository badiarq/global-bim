import { FC } from "react";
import { useAppContext } from "../../middleware/context-provider";

export const LogInButton: FC = () => {
  const dispatch = useAppContext()[1];

  const onLoginClick = () => {
    dispatch({ type: "LOGIN" });
  };

  return <button className="btn-primary-dark" onClick={onLoginClick}>Log in</button>;
};