import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0% !important;

  * {
    font-family: Poppins !important;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
  transition: 0.3s ease all;
  margin: 10px auto;

  .content-area {
    width: 100%;
    padding: 1rem;
  }

  .content-area > .post-title {
    font-weight: 700;
    font-family: Raleway;
    color: #000;
    text-align: left;
    text-transform: uppercase;
    position: relative;

    @media screen and (max-width: 768px) {
      text-align: left;
      line-height: 25px;
    }
  }

  .content-area .post-description {
    line-height: 20px;
    text-align: justify;
    overflow: hidden;
    white-space: pre-wrap;
    text-overflow: ellipsis !important;
    width: auto;
    height: 40px;
  }

  .content-area .post-date {
    color: grey;
    font-weight: bold;
  }

  .link {
    position: relative;
    display: block;
    color: white !important;
    font-size: 14px;
    margin: 25px 0;
    padding: 14px 30px;
    border: 1px solid blue;
    overflow: hidden;
    transition: 1s all ease;
    width: fit-content;
    text-align: center;
    text-decoration: none;
    outline: none;
    z-index: 1;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .link::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
    z-index: -1;
  }

  .link2 {
    background: blue !important;
    border: none;
    color: rgb(0, 0, 0, 0.5);
  }

  .link2::before {
    width: 0;
    height: 100%;
  }

  .link2:hover::before {
    width: 100%;
  }

  .link2::after {
    content: "\\2794";
    margin-left: 10px;
  }

  .image-contain {
    width: 100%;
    margin: auto 20px;
    height: 100%;
    overflow: hidden;
    background: white;
  }

  .image-contain > img {
    width: 100%;
    margin: 20px 0px;
    transition: ease-in-out all 0.3s;
  }

  .image-contain > img:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
