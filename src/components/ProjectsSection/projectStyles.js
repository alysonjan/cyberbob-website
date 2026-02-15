import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  background: transparent;
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
  height: 25rem; /* Adjusted height for images */
  border-radius: 1.563rem;
  background: rgba(14, 26, 26, 0.4);
  backdrop-filter: blur(4px);
  margin: 0.25rem 0.25rem 1.25rem 0.25rem;
  padding: 1.5rem;
  border: 1px solid #1a2f2f;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
      border: 1px solid #00FF41;
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 255, 65, 0.2);
  }

  @media screen and (max-width: 768px) {
    width: 22rem;
    height: auto;
  }
`;

export const Logo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ProjectDescription = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #ccc;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StackWrapper = styled.div`
  border: 1px solid #00FF41;
  background-color: transparent;
  border-radius: 0.5rem;
  color: #00FF41;
  padding: 0.15rem 0.75rem;
  font-size: 12px;
  margin: 0.25rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Tech = styled.small``;
