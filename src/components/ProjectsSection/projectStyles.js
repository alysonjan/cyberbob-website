import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  background: rgba(10, 15, 15, 0.9);
  padding: 5rem 0;
`;

export const ProjectContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 2rem;
`;

export const ProjectWrapper = styled.div`
  width: 30rem;
  height: 24.188rem;
  border-radius: 1.563rem;
  background: #0e1a1a;
  margin: 0.25rem 0.25rem 1.25rem 0.25rem;
  padding: 1rem;
  border: 1px solid #1a2f2f;
  transition: all 0.2s ease-in-out;

  &:hover {
      border: 1px solid #00FF41;
      transform: scale(1.02);
  }

  @media screen and (max-width: 768px) {
    width: 22rem;
    height: auto;
  }
`;

export const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }

  @media screen and (max-width: 480px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 200;
    margin-top: 1rem;
  }
`;

export const ProjectDescription = styled.div`
  font-size: 1.15rem;
  line-height: 1.75rem;
  text-align: center;
  margin: 1rem;
  color: #ccc;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.17rem;
    margin: 0.75rem;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const StackWrapper = styled.div`
  border: 1px solid #00FF41;
  background-color: transparent;
  border-radius: 0.5rem;
  color: #00FF41;
  padding: 0.15rem 0.75rem;
  font-size: 16px;
  margin: 0.75rem;

  @media screen and (max-width: 768px) {
    padding: 0.15rem 0.75rem;
    font-size: 14px;
    margin: 0.25rem;
  }
`;

export const Tech = styled.small``;
