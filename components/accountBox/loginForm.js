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
import { logger } from "utils/logger";

// Validation Schema
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [loading, setLoading] = useState(false);

  const loginUser = async (values) => {
    setLoading(true);
    const res = await auth.login(values);
    setLoading(false);

    if (res.ok) {
      toast.success("Login successful");

      setTimeout(() => {
        window.location = "/courses";
      }, 6000);
    }

    if (!res.ok) {
      setLoading(false);
      toast.error(res.data.message);

      return logger(res);
    }
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
