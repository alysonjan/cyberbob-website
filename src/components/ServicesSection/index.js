import React from 'react';
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesIconWrapper, ServicesH2, ServicesP } from './ServicesElements';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, Crosshair } from 'lucide-react';
import { Line, Title, TitleContainer } from '../shared/SharedStyles';

const Services = () => {

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <ServicesContainer id="services" as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            visible: { transition: { staggerChildren: 0.3 } }
        }}>
            <TitleContainer>
                <Title>Services</Title>
                <Line style={{ marginBottom: '40px' }} />
            </TitleContainer>
            <ServicesWrapper>
                <ServicesCard as={motion.div} variants={item}>
                    <ServicesIconWrapper>
                        <ShieldCheck size={64} color="#00FF41" />
                    </ServicesIconWrapper>
                    <ServicesH2>Consultations</ServicesH2>
                    <ServicesP>Detailed security consultations to identify and mitigate risks.</ServicesP>
                </ServicesCard>
                <ServicesCard as={motion.div} variants={item}>
                    <ServicesIconWrapper>
                        <Search size={64} color="#00FF41" />
                    </ServicesIconWrapper>
                    <ServicesH2>Vulnerability Assessment</ServicesH2>
                    <ServicesP>Comprehensive scanning and analysis of your system's weaknesses.</ServicesP>
                </ServicesCard>
                <ServicesCard as={motion.div} variants={item}>
                    <ServicesIconWrapper>
                        <Crosshair size={64} color="#00FF41" />
                    </ServicesIconWrapper>
                    <ServicesH2>Penetration Testing</ServicesH2>
                    <ServicesP>Simulated cyberattacks to test your defense mechanisms.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
