import { useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Zoom } from "react-reveal";

import { AppForm, SubmitButton, TextArea, Input } from "./forms";

const Button = styled(SubmitButton)`
  border: 0;
  padding: 15px 0px;
  width: 100%;
  background: rgba(40, 114, 211, 0.5);
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 15px !important;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    background: rgba(40, 114, 211, 1);
  }
`;

const Icon = styled.i`
  color: white;
  font-size: 18px;
`;

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  message: Yup.string().required().min(10).label("Message"),
  username: Yup.string().required().min(5).label("Username"),
  number: Yup.number().required().label("Number"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      const res = await emailjs.send(
        "service_2efst58",
        "template_bhq62xg",
        values,
        "user_5RJaWdGYKPxuuFN7HJfPw"
      );
      setLoading(false);

      localStorage.setItem("status", res.status);
      localStorage.setItem("test", res.text);

      toast.success("Thank you! Your message has been received.");
      resetForm();
    } catch (ex) {
      toast.error("An error occured, please try again.");
    }
  };

  return (
    <Zoom cascade>
      <section className="contact">
        <div className="wrapper">
          <h2>Contact Us</h2>

          <AppForm
            initialValues={{
              email: "",
              number: "",
              username: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="input_field">
              <Input name="username" type="text" placeholder="Name" />
            </div>

            <div className="input_field">
              <Input name="email" type="text" placeholder="Email" />
            </div>

            <div className="input_field">
              <Input name="number" type="text" placeholder="Phone" />
            </div>

            <TextArea name="message" placeholder="Message" />

            <div className="btn">
              <Button className="button">
                {loading ? (
                  <Icon className="fa fa-spinner fa-spin"></Icon>
                ) : (
                  <>
                    SEND <Icon className="fa-solid fa-paper-plane"></Icon>
                  </>
                )}
              </Button>
            </div>
          </AppForm>
        </div>
      </section>
    </Zoom>
  );
};

export default ContactForm;
