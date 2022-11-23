import styled from "styled-components";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CourseDiv = styled(Link)`
  background-color: white;
  position: relative;
  width: 250px;
  margin-top: 20px;
  height: 250px;
  border-radius: 5px;
  border-bottom: 5px solid #3475ca;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease-in-out;

  &:hover {
    outline: 1px solid #3475ca;
  }

  &:hover .imageDiv img {
    transform: scale(1.2);
  }

  .imageDiv {
    flex: 2;
    overflow: hidden;
    height: 170px;
    width: 100%;
  }

  .imageDiv img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all ease-in-out 0.5s;
  }

  i {
    text-align: center;
    font-size: 70px;
    width: 100%;
    max-width: 100px;
    margin-bottom: 10px;
    color: #3475ca;
  }

  .text-contain {
    align-items: center;
    flex: 1;
    display: flex;
    justify-content: center;
  }

  h5 {
    color: #3475ca;
    letter-spacing: 1;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }
`;

const CategoryCard = ({ name, img, to, ...otherProps }) => {
  return (
    <CourseDiv href={to} {...otherProps}>
      <div className="imageDiv">
        <LazyLoadImage alt="Category Img" src={img} />
      </div>

      <div className="text-contain">
        <h5>{name}</h5>
      </div>
    </CourseDiv>
  );
};

export default CategoryCard;
