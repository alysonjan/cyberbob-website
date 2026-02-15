import React from 'react';
import {
    FooterContainer,
    FooterWrapper,
    FooterLogo,
    FooterTagline,
    SocialIcons,
    SocialIconLink,
    Copyright
} from './FooterElements';
import { Shield, Linkedin, Globe, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLogo>
                    <Shield size={40} color="#00FF41" />
                </FooterLogo>
                <FooterTagline>
                    Joshua Bobb Piesta | Securing Digital Frontiers.
                </FooterTagline>
                <SocialIcons>
                    <SocialIconLink href="https://www.linkedin.com/in/jpiesta/" target="_blank" aria-label="LinkedIn">
                        <Linkedin />
                    </SocialIconLink>
                    <SocialIconLink href="https://medium.com/@joshuapiesta" target="_blank" aria-label="Medium">
                        <Globe />
                    </SocialIconLink>
                    <SocialIconLink href="mailto:joshuapiesta@gmail.com" aria-label="Email">
                        <Mail />
                    </SocialIconLink>
                </SocialIcons>
                <Copyright>
                    © {new Date().getFullYear()} Joshua Bobb Piesta | Digital Integrity Guaranteed.
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
