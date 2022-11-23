import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;

  textarea {
    width: 100%;
    resize: none;
    border: 1px solid #f4f4f4;
    outline: none;
    padding: 8px;
    height: 80px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
