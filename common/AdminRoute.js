import { Navigate } from "react-router-dom";
import auth from "services/authService";

const AdminRoute = ({ children }) => {
  const admin = auth.adminUser;

  return <>{admin ? children : <Navigate href="/auth/admin" />}</>;
};

export default AdminRoute;
