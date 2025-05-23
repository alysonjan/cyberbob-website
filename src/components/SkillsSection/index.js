import React from "react";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import {
  // Bar,
  Image,
  // SkillbarContainer,
  SkillImageContainer,
  SkillsContainer,
  SkillsWrapper,
  SkillWrapper,
} from "./skillsStyles";

const SkillsSection = ({ id, title, frontend, api, backend }) => {
  return (
    <SkillsContainer id={id}>
      <TitleContainer>
        <Title>{title}</Title>
        <Line />
      </TitleContainer>
      <SkillsWrapper>
        {frontend.map((item, index) => {
          return (
            <SkillWrapper key={index}>
              <SkillImageContainer width="100" height="8rem">
                <Image src={item.img} alt={item.alt} />
              </SkillImageContainer>
            </SkillWrapper>
          );
        })}
      </SkillsWrapper>
      <SkillsWrapper>
        {api.map((item, index) => {
          return (
            <SkillWrapper key={index}>
              <SkillImageContainer width="100" height="8rem" isApi>
                <img src={item.img} alt={item.alt} />
              </SkillImageContainer>
            </SkillWrapper>
          );
        })}
      </SkillsWrapper>
      <SkillsWrapper>
        {backend.map((item, index) => {
          return (
            <SkillWrapper key={index}>
              <SkillImageContainer width="100" height="8rem" isBackend>
                <Image src={item.img} alt={item.alt} />
              </SkillImageContainer>
            </SkillWrapper>
          );
        })}
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;
