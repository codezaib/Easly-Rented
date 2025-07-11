import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedLayout = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user) return <Navigate to={"/account/login"} />;
  return children;
};

export default ProtectedLayout;
