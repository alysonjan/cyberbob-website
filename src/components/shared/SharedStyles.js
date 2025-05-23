import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Line = styled.hr`
  border-top: 5px solid #525e65;
  border-radius: 5px;
  width: 19.875rem;

  @media screen and (max-width: 768px) {
    border-top: 3px solid #525e65;
    width: 14.875rem;
  }

  @media screen and (max-width: 360px) {
    border-top: 2px solid #525e65;
    width: 10.875rem;
  }
`;
