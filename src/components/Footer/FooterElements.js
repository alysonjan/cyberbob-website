import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: rgba(10, 15, 15, 0.9);
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  width: 100%;
`;

export const FooterLogo = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FooterTagline = styled.p`
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.5;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 20px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #00FF41;
    transform: translateY(-5px);
  }
`;

export const Copyright = styled.p`
  color: #aaa;
  font-size: 0.85rem;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
`;
