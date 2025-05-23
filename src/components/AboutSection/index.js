import React from "react";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import {
  AboutContainer,
  AboutWrapper,
  Description,
  DescriptionContainer,
  Image,
  ImageContainer,
} from "./aboutStyles";

const AboutSection = ({ id, title, img, alt, description }) => {
  return (
    <AboutContainer id={id}>
      <TitleContainer>
        <Title>{title}</Title>
        <Line />
      </TitleContainer>
      <AboutWrapper>
        <ImageContainer>
          <Image src={img} alt={alt} />
        </ImageContainer>
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
