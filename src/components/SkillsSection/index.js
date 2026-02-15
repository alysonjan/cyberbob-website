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
} from "./skillsStyles";
import {
  Terminal,
  Box,
  ShieldCheck,
  Globe,
  FlaskConical,
  ShieldAlert,
  Server,
  Crosshair,
  Cpu
} from "lucide-react";

const getIcon = (name) => {
  const lowerName = name.toLowerCase();

  if (lowerName.includes("tryhackme")) return <Terminal size={40} color="#00FF41" />;
  if (lowerName.includes("hackthebox")) return <Box size={40} color="#00FF41" />;
  if (lowerName.includes("tcm")) return <ShieldCheck size={40} color="#00FF41" />;
  if (lowerName.includes("web security")) return <Globe size={40} color="#00FF41" />;

  if (lowerName.includes("pentesterlab")) return <FlaskConical size={40} color="#00FF41" />;
  if (lowerName.includes("letsdefend")) return <ShieldAlert size={40} color="#00FF41" />;

  if (lowerName.includes("blue team")) return <Server size={40} color="#00FF41" />;
  if (lowerName.includes("cyberdefenders")) return <Crosshair size={40} color="#00FF41" />;

  return <Cpu size={40} color="#00FF41" />;
};


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
                {getIcon(item.name || "")}
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
