import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  background: rgba(10, 15, 15, 0.9);
  padding: 5rem 0;
`;

export const MainContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

export const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Email = styled.div`
  font-size: 1.75rem;
  color: #fff;
  margin-left: 1rem;

  @media screen and (max-width: 360px) {
    font-size: 1.35rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 4rem;
`;

export const IconsContainer = styled.div`
  margin: 2rem;

  @media screen and (max-width: 480px) {
    margin: 1rem;
  }
`;
