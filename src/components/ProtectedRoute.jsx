import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isUnlocked = sessionStorage.getItem("unlocked") === "true";
  if (!isUnlocked) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;
