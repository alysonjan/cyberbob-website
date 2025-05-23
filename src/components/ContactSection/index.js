import React from "react";
import {
  ContactContainer,
  Email,
  EmailContainer,
  EmailIcon,
  Icons,
  IconsContainer,
  MainContainer,
  SocialContainer,
} from "./contactStyles";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";

const ContactSection = ({ id, title, email, emailLogo, socials }) => {
  return (
    <ContactContainer id={id}>
      <TitleContainer>
        <Title>{title}</Title>
        <Line />
      </TitleContainer>
      <MainContainer>
        <EmailContainer>
          <EmailIcon src={emailLogo} />
          <Email>{email}</Email>
        </EmailContainer>
        <SocialContainer>
          {socials.map((item, index) => {
            return (
              <IconsContainer key={index}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <Icons src={item.img} alt={item.alt} />
                </a>
              </IconsContainer>
            );
          })}
        </SocialContainer>
      </MainContainer>
    </ContactContainer>
  );
};

export default ContactSection;
