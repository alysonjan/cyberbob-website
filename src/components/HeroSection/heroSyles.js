import styled, { keyframes } from "styled-components";

const glitch = keyframes`
  0% {
    text-shadow: 2px 2px #00FF41, -2px -2px #ff00c1;
  }
  25% {
    text-shadow: -2px 2px #00FF41, 2px -2px #ff00c1;
  }
  50% {
    text-shadow: 2px -2px #00FF41, -2px 2px #ff00c1;
  }
  75% {
    text-shadow: -2px -2px #00FF41, 2px 2px #ff00c1;
  }
  100% {
    text-shadow: 2px 2px #00FF41, -2px -2px #ff00c1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 255, 65, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 20px rgba(0, 255, 65, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 255, 65, 0);
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh; /* Full viewport height for impact */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  background: transparent;
  padding-top: 60px; /* Offset for fixed navbar */

  @media screen and (max-width: 768px) {
    padding-top: 80px; /* More space for the absolute navbar */
  }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  position: relative;
  /* Removed border radius styles for cleaner look */
  text-align: center;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h3`
  font-family: "Courier New", Courier, monospace; /* Hacker font */
  font-size: 5rem;
  color: #fff;
  font-weight: 700;
  margin: 0;
  letter-spacing: -2px;
  
  /* Glitch effect on hover */
  &:hover {
      animation: ${glitch} 0.3s infinite;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 2rem;
  }
`;

export const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const WorkTitle = styled.div`
  font-size: 2.5rem;
  color: #00FF41; /* Hacker Green */
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;

    @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Imagewrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: #001100;
    border: 2px solid #00FF41;
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.4);
    animation: ${pulse} 3s infinite; /* Pulsing effect */
    
    &:hover {
        background: #002200;
        cursor: pointer;
    }
`;

export const Img = styled.img`
  display: none; /* Hide old image styles */
`;

export const Description = styled.div`
  width: 60%;
  margin: auto;
  font-size: 1.5rem;
  text-align: center;
  color: #ccc;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;

  @media screen and (max-width: 480px) {
    width: 90%;
    font-size: 1.1rem;
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
  background: transparent;
  color: #00FF41;
  padding: 12px 40px;
  border-radius: 4px;
  border: 2px solid #00FF41;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
      background: #00FF41;
      color: #000;
  }
`;
