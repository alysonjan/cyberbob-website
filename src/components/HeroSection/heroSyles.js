import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: auto;
  // background: linear-gradient(to bottom, #0b1c2c, #2c3245, #1a1f33);
  background: linear-gradient(to bottom, #0a0f0f, #0e1a1a, #111f1f);

  // @media screen and (max-width: 1024px) {
  //   height: 140vh;
  // }

  // @media screen and (max-width: 900px) and (min-width: 600px),
  //   (min-width: 1100px) {
  //   height: 160vh;
  // }

  // @media screen and (max-width: 768px) {
  //   height: 110vh;
  // }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 14.75rem;
  position: relative;
  top: 70px;
  border-bottom-left-radius: 180rem;
  border-bottom-right-radius: 180rem;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* position: absolute ; */
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h3`
  font-family: "Josefin Sans";
  font-size: 4.5rem;
  color: #ffff;
  font-weight: 300;
  margin: 4rem 0rem 0.75rem 0rem;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WorkTitle = styled.div`
  font-size: 2rem;
  color: rgb(121, 193, 248);
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.35rem;
`;

export const Imagewrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0rem 1rem;
`;

export const Img = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
`;

export const Description = styled.div`
  width: 50%;
  margin: auto;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    width: 80%;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  cursor: pointer;

  a {
    text-decoration: none;
  }
`;

export const ResumeButton = styled.div`
  background: linear-gradient(to right, #3b82f6, #2563eb);
  color: #ffff;
  padding: 8px 35px;
  border-radius: 8px;
`;
