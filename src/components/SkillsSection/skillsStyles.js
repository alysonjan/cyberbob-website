import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, #0a0f0f, #0e1a1a, #111f1f);
  padding: 5rem 0;
`;

export const SkillsWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

export const SkillImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  overflow: visible;

  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    object-fit: contain;

    @media screen and (max-width: 768px) {
      width: ${({ isApi, isBackend }) =>
        isApi ? "18rem" : isBackend ? "6.8rem" : "6rem"};
      height: auto;
    }

    @media screen and (max-width: 480px) {
      width: ${({ isApi, isBackend }) =>
        isApi ? "16rem" : isBackend ? "6.8rem" : "4.5rem"};
      height: auto;
    }
  }
`;

export const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 6rem;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 4.5rem;
    height: auto;
  }
`;

export const SkillbarContainer = styled.div`
  width: 7.5rem;
  height: 0.563rem;
  background: #c4c4c4;

  @media screen and (max-width: 480px) {
    width: 5.2rem;
    height: 0.363rem;
  }
`;

export const Bar = styled.div`
  height: 100%;
  width: ${({ width }) => width};
  background: ${({ color }) => color};
`;
