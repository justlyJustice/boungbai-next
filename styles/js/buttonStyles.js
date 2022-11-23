import Link from "next/link";
import styled from "styled-components";

export const Btn = styled(Link)`
  background-color: rgba(40, 114, 211, 1);
  font-size: ${({ big }) => (big ? "15px" : "15px")};
  padding: 15px;
  margin-top: 12px;
  color: white;
  text-align: center;
  text-decoration: none;
  transition: ease all 0.6s;
  display: block;
  width: 40%;

  &:hover {
    transform: translateX(5px);
    color: white;
    text-decoration: none;
  }

  &::after {
    margin-left: 5px;
  }

  &:hover::after {
    content: "\\2794";
  }

  @media screen and (max-width: 768px) {
    margin: 20px auto;
    width: 40%;
  }
`;
