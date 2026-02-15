import React from "react";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import { motion } from "framer-motion";
import {
  LogoWrapper,
  ProjectContainer,
  ProjectDescription,
  ProjectsContainer,
  ProjectTitle,
  ProjectWrapper,
  StackContainer,
  StackWrapper,
  Tech,
} from "./projectStyles";
import { Shield, BookOpen, Lock, Server, Cloud, Cpu, FileCode, Award } from "lucide-react";

const getIconForProject = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("hacker")) return <Shield size={64} color="#00FF41" />;
  if (lowerTitle.includes("security+")) return <Lock size={64} color="#00FF41" />;
  if (lowerTitle.includes("isc2")) return <BookOpen size={64} color="#00FF41" />;
  if (lowerTitle.includes("blue team")) return <Server size={64} color="#00FF41" />;
  if (lowerTitle.includes("aws")) return <Cloud size={64} color="#00FF41" />;
  if (lowerTitle.includes("analyst")) return <Cpu size={64} color="#00FF41" />;
  if (lowerTitle.includes("certificate")) return <Award size={64} color="#00FF41" />;
  return <FileCode size={64} color="#00FF41" />;
};

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
        <Line />
      </TitleContainer>
      <ProjectContainer>
        {projects.map((item, index) => {
          return (
            <ProjectWrapper key={index}>
              <LogoWrapper>
                {getIconForProject(item.title)}
              </LogoWrapper>
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
