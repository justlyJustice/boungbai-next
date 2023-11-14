"use client";

import * as Yup from "yup";

import { AppForm, Input, SubmitButton } from "../forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const LoginSection = () => {
  const login = (values: any) => {
    // login(values);
    // if (data && data)
    //   setTimeout(() => {
    //     window.location = "/admin";
    //   }, 2000);
  };

  return (
    <>
      {/* {success && (
            <span className="success">Login successful! redirecting...</span>
          )}

          {error && <span className="error">{status}</span>} */}

      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={login}
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

        <SubmitButton className={`submit-btn`}>
          Login
          {/* {submitting ? (
            <>
              Checking... <i className="fa-solid fa-spinner fa-spin"></i>
            </>
          ) : (
            <>
              Login <i className="fa-solid fa-paper-plane"></i>
            </>
          )} */}
        </SubmitButton>
      </AppForm>
    </>
  );
};

export default LoginSection;
