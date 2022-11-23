import styled from "styled-components";
import { webLogo } from "../../data";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: dodgerblue;
  background-blend-mode: multiply;
  background-image: url(${webLogo});
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  box-shadow: 10px 15px 29px 5px rgba(0, 0, 0, 0.5);
  z-index: 1;
  border: 1px solid #f4f4f4;
  width: 400px;
  padding: 40px;
  margin-left: 50px;
  margin-top: 90px;

  @media screen and (max-width: 768px) {
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    color: darkblue;
    text-align: left;
    display: block;
    margin-bottom: 30px;
  }

  button {
    width: 100%;
    background: none;
    border: 1px solid darkblue;
    padding: 0.9rem;
    color: black;
    transition: 0.3s ease all;
    margin: 0.5rem auto;
    display: block;

    &:hover {
      background: darkblue;
      color: white;
    }
  }
`;

export const Group = styled.div`
  width: 100%;
  margin-bottom: 30px;

  Input {
    width: 100%;
    border: 1px solid #f4f4f4;
    background: transparent;
    color: black;
    padding: 0.5rem;
    outline: none;
  }
`;

export const labelStyle = { color: "darkblue", fontWeight: "bold" };

// eslint-disable-next-line
const ErrorContainer = styled.div`
  background: rgb(236, 34, 34);
  padding: 15px;
  margin: 0px 0px !important;
  color: white;
  font-family: Mulish;
`;
