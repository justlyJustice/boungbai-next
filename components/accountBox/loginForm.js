import { useContext, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

// Component Imports
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedText,
  MutedContainer,
  Button as SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { AppForm } from "../forms";

import auth from "services/authService";
import useSubmit from "hooks/useSubmit";

// Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export function LoginForm(props) {
  const { submit: login, submitting: loading } = useSubmit(auth.login);
  const { switchToSignup } = useContext(AccountContext);

  const loginUser = async (values, { resetForm }) => {
    login(values, `/courses`, ``, resetForm);
  };

  return (
    <BoxContainer>
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={loginUser}
      >
        <FormContainer>
          <Input name="email" type="text" placeholder="Email" />
          <Marginer direction="vertical" margin={10} />
          <Input name="password" type="password" placeholder="Password" />
        </FormContainer>

        <Marginer direction="vertical" margin="1.6em" />

        <SubmitButton>
          {loading ? (
            <>
              <i className="fa fa-spinner fa-spin text-white fa-2x"></i>
            </>
          ) : (
            "Signin"
          )}
        </SubmitButton>
        <Marginer direction="vertical" margin="1em" />

        <MutedContainer>
          <MutedText>Don&lsquo;t have an account? </MutedText>

          <BoldLink href="#" onClick={switchToSignup}>
            Signup
          </BoldLink>
        </MutedContainer>
      </AppForm>
    </BoxContainer>
  );
}
