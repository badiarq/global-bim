import { FC } from "react";
import { useAppContext } from "../../middleware/context-provider";
import { Navigate } from "react-router-dom";
import { LoginTab } from "../../components/user/login-tab";

export const Dashboard: FC = () => {
  const [state] = useAppContext();

    if (state.user) {
        return <Navigate to="/map" />
    } else {
        return (
            <div className="home">
                <LoginTab />
            </div>
        )
    }
};