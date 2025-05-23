import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  // background: linear-gradient(to bottom, #0b1c2c, #2c3245, #1a1f33);
  background: linear-gradient(to bottom, #0a0f0f, #0e1a1a, #111f1f);

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

export const EmailIcon = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  margin: 0 2rem;

  @media screen and (max-width: 480px) {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }

  @media screen and (max-width: 360px) {
    width: 1.75rem;
    height: 1.75rem;
    object-fit: cover;
  }
`;
export const Email = styled.div`
  font-size: 1.75rem;

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
export const Icons = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }

  @media screen and (max-width: 360px) {
    width: 1.55rem;
    height: 1.55rem;
    object-fit: cover;
  }
`;
