import Image from "next/image";

import { webLogo } from "@/public/assets/images";
import LoginSection from "@/ui/admin/Login";

const AdminLogin = () => {
  // const {
  //   data,
  //   submit: login,
  //   success,
  //   submitting,
  //   error,
  //   status,
  // } = useSubmit(authService.login);

  return (
    <div className="wrapper">
      <div className="left">
        <Image className="left__img" src={webLogo} alt="" />

        <div className="text-div">
          <h2>Boungbai Computers</h2>
          <h3>Netware Limited</h3>
        </div>
      </div>

      <div className="right">
        <div className="form__contain">
          <div className="text-div">
            <h4>Welcome, Admin</h4>
            <h6>Login to continue</h6>
          </div>

          <LoginSection />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
