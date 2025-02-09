import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const AuthRedirect = ({ children }) => {
    const { token } = useContext(UserContext);
    return token ? <Navigate to="/" /> : children;
};

export default AuthRedirect;
