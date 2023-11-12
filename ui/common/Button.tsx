"use client";

import styled from "styled-components";
import Link from "next/link";

export const Btn = styled(Link)`
  background-color: rgba(40, 114, 211, 1);
  border-radius: 25px;
  padding: 10px;
  margin-top: 12px;
  color: white;
  text-align: center;
  text-decoration: none;
  transition: ease-in-out all 0.3s;
  display: block;
  width: 40%;

  &:hover {
    color: white;
    text-decoration: none;
    transition: ease-in-out all 0.3s;
  }

  &::after {
    margin-left: 5px;
    transition: ease-in-out all 0.3s;
  }

  &:hover::after {
    content: "\\2794";
    transition: ease-in-out all 0.3s;
  }

  @media screen and (max-width: 768px) {
    margin: 20px auto;
    width: 100%;
  }
`;

type Props = {
  title: string;
  style: any;
  href: string;
};

const Button = ({ title, href, ...otherProps }: Props) => {
  return (
    <Btn href={href} {...otherProps}>
      {title}
    </Btn>
  );
};

export default Button;
