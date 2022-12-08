/* eslint-disable no-unused-vars */
import * as Yup from "yup";
import { AppForm, Input, SubmitButton } from "components/forms";

import authService from "services/authService";
import useSubmit from "hooks/useSubmit";
import Image from "next/image";
import Head from "components/Head";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const AdminLogin = () => {
  const {
    submit: login,
    success,
    submitting,
    error,
    status,
  } = useSubmit(authService.login);

  const loginAdmin = (values, { resetForm }) => {
    login(values, `/dashboard`, resetForm);
  };

  return (
    <div className="wrapper">
      <Head title={`Admin Login`} description={`Login as an admin`} />
      <div className="left">
        <Image src="/images/web-logo.png" alt="" width="200" height="200" />

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

          {success && (
            <span className="success">Login successful! redirecting...</span>
          )}

          {error && <span className="error">{status}</span>}

          <AppForm
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={loginAdmin}
          >
            <Input
              className={`input`}
              name={`email`}
              placeholder={`Email address`}
            />

            <Input
              className={`input`}
              name={`password`}
              placeholder={`Enter password`}
              type={`password`}
            />

            <SubmitButton className={`submit-btn`} disabled={submitting}>
              {submitting ? (
                <>
                  Checking... <i className="fa-solid fa-spinner fa-spin"></i>
                </>
              ) : (
                <>
                  Login <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </SubmitButton>
          </AppForm>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
