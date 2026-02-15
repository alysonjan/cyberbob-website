import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  background: transparent;
  padding: 5rem 0;
`;

export const SkillsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2.5rem 2rem;
  width: 320px;
  min-height: 320px;
  background: rgba(14, 26, 26, 0.4);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  border: 1px solid #1a2f2f;
  transition: all 0.3s ease-in-out;
  
  &:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 25px rgba(0, 255, 65, 0.15);
      border: 1px solid #00FF41;
  }
`;

export const SkillImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 15px;
  transition: all 0.3s ease-in-out;
  
  ${SkillWrapper}:hover & {
      background: rgba(0, 255, 65, 0.1);
      transform: scale(1.05);
  }
`;

export const SkillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SkillTitle = styled.h3`
  color: #fff;
  font-size: 1.35rem;
  margin-bottom: 1.25rem;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 700;
`;

export const SkillDescription = styled.p`
  color: #aaa;
  font-size: 0.95rem;
  text-align: center;
  line-height: 1.6;
`;
