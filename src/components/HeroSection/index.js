import React from "react";
// import { AiOutlineDownload } from "react-icons/ai";
// import myResume from "../../data/Alyson_Urriza_Jan2025.pdf";
import {
  ButtonContainer,
  Description,
  DescriptionContainer,
  HeroContainer,
  HeroWrapper,
  Imagewrapper,
  Img,
  Name,
  NameContainer,
  // ResumeButton,
  WorkContainer,
  WorkTitle,
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
    <HeroContainer id={id}>
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
          <Img src={img} alt={alt} />
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
