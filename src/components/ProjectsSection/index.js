import React from "react";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import { motion } from "framer-motion";
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
    <ProjectsContainer id={id} as={motion.div}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <TitleContainer>
        <Title>{title}</Title>
        <Line style={{ marginBottom: "25px" }} />
      </TitleContainer>
      <ProjectContainer>
        {projects.map((item, index) => {
          return (
            <ProjectWrapper key={index}>
              <Logo src={item.img} alt={item.title} loading="lazy" />
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
