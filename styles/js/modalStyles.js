import styled from "styled-components";

export const Background = styled.div`
width: 100%;
height: 100vh;
background: rgba(0, 0, 0, 0.5);s
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  background: white;
  box-shadow: 8px 10px 20px 10px rgba(0, 0, 0, 0.5);
  border-bottom: 5px solid rgb(4, 46, 161);

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 350px;
  }

  @media screen and (max-width: 320px) {
    max-width: 500%;
    width: 200px;
  }
`;

export const WrapperHeader = styled.div`
  width: 100%;
  padding: 20px;
  background: rgb(4, 46, 161);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h5 {
    color: white;
    font-size: 40px;
    font-weight: bolder;
    text-transform: capitalize;
    font-family: Dancing Script;
  }

  @media screen and (max-width: 768px) {
    h5 {
      font-size: 25px;
    }
  }
`;

export const Icon = styled.i`
  font-size: 35px;
  color: white;
  cursor: pointer;
  transition: ease-in-out 0.3s all;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;
    font-weight: bolder;
  }
`;

export const ModalBody = styled.div`
  // padding: 15px;
  text-align: center;
  margin: 5% auto;

  h3 {
    text-align: capitalize;
    font-weight: bolder !important;
    font-family: Dancing Script;
    line-height: 50px;
    font-size: 38px;
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 20px;
    }
  }
`;

export const Targetbutton = styled.a`
  width: 35%;
  font-family: Dancing Script;
  font-weight: bold;
  color: white;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 3px;
  display: block;
  text-align: center;
  font-size: 25px;
  letter-spacing: 2px;
  background: rgb(4, 46, 161);
  transition: 0.3s ease-in-out all;

  &:hover {
    text-decoration: none;
    color: white;
    transform: translateY(-3px);
  }
`;
