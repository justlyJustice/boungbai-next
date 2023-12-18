import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const CourseDiv = styled(Link)`
  background-color: white;
  position: relative;
  width: 30%;
  margin-top: 20px;
  height: 350px;
  border-radius: 5px;
  border-bottom: 5px solid rgb(4, 46, 161);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease-in-out;

  &:hover .imageDiv .img {
    transform: scale(1.1);
  }

  .imageDiv {
    flex: 2;
    overflow: hidden;
    height: 170px;
    width: 100%;
  }

  .imageDiv .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all ease-in-out 0.5s;
  }

  .text-contain {
    align-items: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h4 {
    color: rgb(4, 46, 161);
    letter-spacing: 1;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
  }

  p {
    color: rgb(23, 22, 22);
    font-size: 16px;
    font-weight: 500;
    /* line-height: 15px; */
    width: 80%;
  }
`;

type Props = {
  name: string;
  description?: string;
  img: string;
  href: string;
};

const Card = ({ name, img, description, href, ...otherProps }: Props) => {
  return (
    <CourseDiv href={href} {...otherProps}>
      <div className="imageDiv">
        <Image className="img" height={100} width={100} alt="Img" src={img} />
      </div>

      <div className="text-contain">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </CourseDiv>
  );
};

export default Card;
