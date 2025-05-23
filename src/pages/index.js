import React, { useState } from 'react'
import { AboutInfo, ContactInfo, HeroInfo, ProjectInfo, SkillsInfo } from '../data/Info'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection {...HeroInfo} />
      <AboutSection {...AboutInfo} />
      <SkillsSection {...SkillsInfo} />
      <ProjectSection {...ProjectInfo} />
      <ContactSection {...ContactInfo} />
    </>
  );
};

export default Home