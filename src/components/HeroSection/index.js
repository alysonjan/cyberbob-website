import React from "react";
// import { AiOutlineDownload } from "react-icons/ai";
// import myResume from "../../data/Alyson_Urriza_Jan2025.pdf";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";
import {
  ButtonContainer,
  Description,
  DescriptionContainer,
  HeroContainer,
  HeroWrapper,
  Imagewrapper,
  Name,
  NameContainer,
  // ResumeButton,
  WorkContainer,
  WorkTitle,
  IconWrapper, // New refined wrapper for icon
} from "./heroSyles";

const HeroSection = ({
  id,
  name,
  work,
  img,
  alt,
  description,
  buttonLabel,
}) => {
  return (
    <HeroContainer id={id} as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroWrapper>
        <NameContainer>
          <Name>{name}</Name>
          <WorkContainer>
            <WorkTitle>{work}</WorkTitle>
          </WorkContainer>
        </NameContainer>
      </HeroWrapper>
      <DescriptionContainer>
        <Imagewrapper>
          <IconWrapper>
            <ShieldAlert size={180} color="#00FF41" strokeWidth={1} />
          </IconWrapper>
        </Imagewrapper>
        <Description>{description}</Description>
      </DescriptionContainer>
      <ButtonContainer>
        {/* <a href={myResume} download="Alyson Jan Urriza">
          <ResumeButton>
            <AiOutlineDownload /> {buttonLabel}
          </ResumeButton>
        </a> */}
      </ButtonContainer>
    </HeroContainer>
  );
};

export default HeroSection;
