import React from "react";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import { motion } from "framer-motion";
import {
  SkillImageContainer,
  SkillsContainer,
  SkillsWrapper,
  SkillWrapper,
  SkillTitle,
  SkillDescription,
  SkillImage,
} from "./skillsStyles";

const SkillsSection = ({ id, title, frontend, api, backend }) => {
  // Merge all platforms into a single array for consistent alignment
  const allPlatforms = [...frontend, ...api, ...backend];

  return (
    <SkillsContainer id={id} as={motion.div}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <TitleContainer>
        <Title>{title}</Title>
        <Line style={{ marginBottom: '25px' }} />
      </TitleContainer>

      <SkillsWrapper>
        {allPlatforms.map((item, index) => {
          return (
            <SkillWrapper key={index}>
              <SkillImageContainer>
                <SkillImage src={item.img} alt={item.name} />
              </SkillImageContainer>
              <SkillTitle>{item.name}</SkillTitle>
              <SkillDescription>{item.description}</SkillDescription>
            </SkillWrapper>
          );
        })}
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;
