/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Navbar from "components/Navbar";
import constructionImg from "assets/images/constructionImg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled.button`
  width: 25%;
  background: none;
  font-size: 15px !important;
  font-family: Montserrat;
  padding: 15px;
  border: 1px solid #3457ca;
  color: #3457ca;
  transition: ease 0.3s all;

  .arrow {
    color: #3457ca;
  }

  &:hover {
    background: #3457ca;
    color: white !important;
    box-shadow: 5px 3px 15px 4px rgba(0, 0, 0, 0.4);
  }

  &:hover ~ span {
    color: white !important;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    background: #3457ca;
    color: white;
    font-size: 20px !important;

    &:hover {
      box-shadow: 0px 0px 0px 0px;
    }
  }
`;

const H2 = styled.h2`
  color: #554f4f;
  font-size: 45px;
  line-height: 40px;
  font-family: "Montserrat";
  font-weight: bolder;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

const Image = styled(LazyLoadImage)`
  max-width: 100%;
  width: 400px;
  margin: 20px;
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container>
        <Image src={constructionImg} alt="Construction Img" />
        <H2>
          Sorry! This Page is <br /> under construction.
        </H2>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          <span className="arrow">&larr;</span> Back to Previous Page
        </Button>
      </Container>
    </>
  );
};

export default NotFound;
