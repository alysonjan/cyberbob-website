import React from "react";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import {
  Logo,
  ProjectContainer,
  ProjectDescription,
  ProjectsContainer,
  ProjectTitle,
  ProjectWrapper,
  StackContainer,
  StackWrapper,
  Tech,
} from "./projectStyles";

const ProjectSection = ({ id, title, projects }) => {
  return (
    <ProjectsContainer id={id}>
      <TitleContainer>
        <Title>{title}</Title>
        <Line />
      </TitleContainer>
      <ProjectContainer>
        {projects.map((item, index) => {
          return (
            <ProjectWrapper key={index}>
              <Logo src={item.img} alt={item.title} />
              <ProjectTitle>{item.title}</ProjectTitle>
              <ProjectDescription>{item.description}</ProjectDescription>
              <StackContainer>
                {item.stack.map((tech, index) => (
                  <StackWrapper key={index}>
                    <Tech>{tech}</Tech>
                  </StackWrapper>
                ))}
              </StackContainer>
            </ProjectWrapper>
          );
        })}
      </ProjectContainer>
    </ProjectsContainer>
  );
};

export default ProjectSection;
