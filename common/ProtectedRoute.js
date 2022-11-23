import { useNavigate } from "react-router-dom";
import useUser from "hooks/useUser";
import useAdmin from "hooks/useAdmin";

import Alert from "utils/Alert";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { admin } = useAdmin();

  const validateUser = () => {
    Alert.flash(
      `Not Authorized`,
      `warning`,
      `You need to login to access this route.`
    ).then((res) => {
      if (res.isConfirmed) return navigate(`/auth/user`);

      return navigate("/");
    });
  };

  return <>{user || admin ? children : validateUser()}</>;
};

export default ProtectedRoute;
