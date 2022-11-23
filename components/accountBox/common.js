import styled from "styled-components";

// Form Components
import { SubmitButton, Input as TextInput } from "../forms";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedText = styled.span`
  font-size: 14px;
  color: #c8c8c8a4;
  font-weight: 500;
  text-decoration: none !important;
  transition: all, ease-in-out 0.3s;
`;

export const BoldLink = styled.a`
  font-size: 14px;
  color: rgb(11, 10, 113);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  text-decoration: none !important;
`;

export const MutedContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Input = styled(TextInput)`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(11, 10, 113);
  }
`;

export const Button = styled(SubmitButton)`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(4, 46, 161);
  background: linear-gradient(rgba(14, 112, 240, 0.8), rgb(4, 46, 161));

  &:hover {
    filter: brightness(1.03);
  }
`;
