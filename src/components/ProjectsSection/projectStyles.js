import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, #0a0f0f, #0e1a1a, #111f1f);
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
  background: hsl(240, 5.3%, 88.8%);
  margin: 0.25rem 0.25rem 1.25rem 0.25rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: 22rem;
    height: auto;
  }
`;

export const Logo = styled.img`
  width: 100px; /* smaller width */
  height: 100px; /* smaller height */
  object-fit: cover;
  display: block; /* to apply margin auto properly */
  margin: 0 auto; /* center horizontally */

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
  color: #2998ec;
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
  color: black;

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
  border: 1px solid #2998ec;
  background-color: #2e3445;
  border-radius: 0.5rem;
  color: #ffff;
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
