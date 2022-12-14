import { useContext } from "react";
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

import { register } from "services/userService";

import useSubmit from "hooks/useSubmit";

// Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().min(5).label("Name"),
  password: Yup.string().required().min(5).label("Password"),
});

export function SignupForm(props) {
  const { submit: signUp, submitting: loading } = useSubmit(register);
  const { switchToSignin } = useContext(AccountContext);

  const signUpUser = async (user, { resetForm }) => {
    signUp(user, `/courses`, ``, resetForm);
    /*  setLoading(true);
    const res = await register(user);
    setLoading(false);

    if (res.ok) {
      auth.loginWithJwt(res.data && res.data.token);
      toast.success("Signup successful!");

      setTimeout(() => {
        window.location = "/courses";
      }, 6000);
    }

    if (!res.ok) {
      setLoading(false);
      toast.error(res.data.message);
      return logger(res);
    } */
  };

  return (
    <BoxContainer>
      <AppForm
        onSubmit={signUpUser}
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
      >
        <FormContainer>
          <Input name="name" type="text" placeholder="Full Name" />
          <Input name="email" type="text" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
        </FormContainer>

        <Marginer direction="vertical" margin={10} />
        <SubmitButton>
          {loading ? (
            <>
              <i className="fa fa-spinner fa-spin text-white fa-2x"></i>
            </>
          ) : (
            "Signup"
          )}
        </SubmitButton>
        <Marginer direction="vertical" margin="1em" />

        <MutedContainer>
          <MutedText>Already have an account?</MutedText>
          <BoldLink href="#" onClick={switchToSignin}>
            Signin
          </BoldLink>
        </MutedContainer>
      </AppForm>
    </BoxContainer>
  );
}
