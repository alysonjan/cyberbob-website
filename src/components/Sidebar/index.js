import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './sidebarStyles'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick = {toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="about" onClick={toggle}>About me</SidebarLink>
                <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
                <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar