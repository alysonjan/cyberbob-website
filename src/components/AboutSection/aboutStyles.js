import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: auto;
  background: transparent;
  padding: 5rem 0;
`;

export const AboutWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  background: rgba(14, 26, 26, 0.4);
  border: 1px solid #1a2f2f;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
      box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
      border: 1px solid #00FF41;
      transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
      width: 15rem;
      height: 15rem;
      margin: 2rem;
  }
`;

export const DescriptionContainer = styled.div`
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const Description = styled.div`
  font-size: 1.25rem;
  text-align: center;
  line-height: 2.25rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Courier New', Courier, monospace; /* Consistent with hacking theme */

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    line-height: 2rem;
  }

  @media screen and (max-width: 360px) {
    line-height: 1.45rem;
  }
`;
