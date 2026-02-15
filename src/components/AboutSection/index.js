import React from "react";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import { motion } from "framer-motion";
import {
  AboutContainer,
  AboutWrapper,
  Description,
  DescriptionContainer,
  AvatarContainer,
} from "./aboutStyles";
import { ShieldCheck } from "lucide-react"; // Changed to ShieldCheck as requested

const AboutSection = ({ id, title, description }) => {
  return (
    <AboutContainer id={id} as={motion.div}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <TitleContainer>
        <Title>{title}</Title>
        <Line />
      </TitleContainer>
      <AboutWrapper>
        <AvatarContainer>
          <ShieldCheck size={200} color="#00FF41" strokeWidth={1} />
        </AvatarContainer>
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
