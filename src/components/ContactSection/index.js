import React from "react";
import {
  ContactContainer,
  Email,
  EmailContainer,
  IconsContainer,
  MainContainer,
  SocialContainer,
} from "./contactStyles";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import { motion } from "framer-motion";
import { Mail, Linkedin, Globe } from "lucide-react"; // Imported standard Lucide icons

const ContactSection = ({ id, title, email, socials }) => {
  return (
    <ContactContainer id={id} as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <TitleContainer>
        <Title>{title}</Title>
        <Line />
      </TitleContainer>
      <MainContainer>
        <EmailContainer>
          <Mail size={64} color="#00FF41" />
          <Email>{email}</Email>
        </EmailContainer>
        <SocialContainer>
          <IconsContainer>
            <a href="https://medium.com/@joshuapiesta" target="_blank" rel="noreferrer" style={{ color: '#00FF41' }}>
              <Globe size={64} />
            </a>
          </IconsContainer>
          <IconsContainer>
            <a href="https://www.linkedin.com/in/jpiesta/" target="_blank" rel="noreferrer" style={{ color: '#00FF41' }}>
              <Linkedin size={64} />
            </a>
          </IconsContainer>
        </SocialContainer>
      </MainContainer>
    </ContactContainer>
  );
};

export default ContactSection;
