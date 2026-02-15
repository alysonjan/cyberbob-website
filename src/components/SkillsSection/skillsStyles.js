import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  background: rgba(10, 15, 15, 0.9);
  padding: 5rem 0;
`;

export const SkillsWrapper = styled.div`
  max-width: 1200px; /* Constrain width for better grid centering */
  margin: 0 auto;
  display: flex;
  justify-content: center; /* Center items instead of space-evenly */
  flex-wrap: wrap;
  gap: 2rem; /* Consistent spacing between items */
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content to top */
  align-items: center;
  padding: 2rem;
  width: 300px; /* Fixed width */
  min-height: 280px; /* Minimum height for consistency */
  background: #0e1a1a;
  border-radius: 10px;
  border: 1px solid #1a2f2f;
  transition: all 0.3s ease-in-out;
  
  &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 255, 65, 0.2);
      border: 1px solid #00FF41;
  }
`;

export const SkillImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid #00FF41;
  flex-shrink: 0; /* Prevent icon shrinking */
  
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export const SkillTitle = styled.h3`
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
`;

export const SkillDescription = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.5;
`;
