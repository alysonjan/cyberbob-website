export const HeroInfo = {
  id: "home",
  name: "Joshua Bobb Piesta",
  work: "Cyber Security Specialist",
  img: require("../images/logo.png"),
  alt: "Joshua Bobb Piesta",
  description:
    "Securing the digital world, one packet at a time. I engineer robust defense systems and execute precision offensive operations to safeguard critical assets. Your security is my mission.",
  buttonLabel: "VIEW RESUME",
};

export const AboutInfo = {
  id: "about",
  title: "ABOUT ME",
  img: require("../images/me.png"),
  alt: "About Joshua",
  description: `I am a dedicated cybersecurity professional committed to the CIA triad—Confidentiality, Integrity, and Availability. 
  My expertise bridges the gap between complex security challenges and robust, actionable solutions. 
  Driven by proactive defense and continuous improvement, I stay ahead of the curve in an ever-changing threat landscape.
  My mission is to empower organizations with secure digital environments, turning potential vulnerabilities into fortified strengths.`,
};

export const SkillsInfo = {
  id: "skills",
  title: "PLATFORMS",
  frontend: [
    {
      img: require("../images/bob/try.png"),
      name: "TryHackMe",
      description: "Gamified cyber security training with hands-on labs.",
      percentage: "80%",
      background: "#E44D26",
    },
    {
      img: require("../images/bob/hack.png"),
      name: "HackTheBox",
      description: "Advanced penetration testing labs and competitive hacking scenarios.",
      percentage: "60%",
      background: "#2062AF",
    },
    {
      img: require("../images/bob/tcm.png"),
      name: "TCM Security",
      description: "Practical ethical hacking certification courses and professional training.",
      percentage: "80%",
      background: "#F0DB4F",
    },
    {
      img: require("../images/bob/web.png"),
      name: "Web Security Academy",
      description: "Expert-led web application security training by PortSwigger.",
      percentage: "60%",
      background: "#05A5D1",
    },
  ],
  api: [
    {
      img: require("../images/bob/pen.png"),
      name: "PentesterLab",
      description: "In-depth web penetration testing exercises and vulnerability learning.",
    },
    {
      img: require("../images/bob/def.png"),
      name: "LetsDefend",
      description: "Blue team training platform for SOC analysts and incident responders.",
    },
  ],
  backend: [
    {
      img: require("../images/bob/blue.png"),
      name: "Blue Team Labs",
      description: "Gamified defensive cyber security platform for digital forensics and IR.",
      percentage: "90%",
      background: "#80BD01",
    },
    {
      img: require("../images/bob/cyberdef.png"),
      name: "CyberDefenders",
      description: "Blue team training with high-quality CTF challenges and diverse labs.",
      percentage: "70%",
      background: "#E10198",
    },
  ],
  apiDesc: "Offensive & Defensive Tools",
  frontendDesc: "Platforms & Communities",
  backendDesc: "Specialized Architectures"
};

export const ProjectInfo = {
  id: "projects",
  title: "CERTIFICATIONS",
  projects: [
    {
      img: require("../images/pwpa.png"),
      title: "PWPA: Practical Web Pentest Associate",
      description:
        "Certified by TCM Security in practical web application penetration testing. Demonstrated proficiency in identifying and exploiting web-based vulnerabilities through hands-on assessments.",
      stack: ["Web Pentesting", "OWASP Top 10", "TCM Security"],
    },
    {
      img: require("../images/cwes.png"),
      title: "HTB: Certified Web Exploitation Specialist",
      description:
        "Achieved HackTheBox certification for advanced web exploitation techniques. Mastery in bypassing complex security controls and exploiting severe web vulnerabilities.",
      stack: ["Web Exploitation", "Advanced Attacks", "HackTheBox"],
    },
    {
      img: require("../images/ceh.png"),
      title: "CEH: Certified Ethical Hacker",
      description:
        "Mastered advanced attack vectors and countermeasures. Validated proficiency in scanning, enumeration, and system hacking to secure perimeters.",
      stack: ["Penetration Testing", "Ethical Hacking", "System Security"],
    },
    {
      img: require("../images/comptia.png"),
      title: "CompTIA Security+",
      description:
        "Solidified core competencies in risk management and threat mitigation. Demonstrated ability to secure networks and devices.",
      stack: ["Risk Mitigation", "Threat Analysis", "Network Security"],
    },
    {
      img: require("../images/isc2.png"),
      title: "(ISC)² Certified in Cybersecurity",
      description:
        "Verified expertise in security principles, business continuity, disaster recovery, and incident response operations.",
      stack: ["Incident Response", "Access Control", "Security Ops"],
    },
    {
      img: require("../images/blueteam.png"),
      title: "BTL1: Blue Team Level 1",
      description:
        "Proven defender with hands-on skills in SIEM, phishing analysis, and digital forensics. Capable of detecting and responding to live threats.",
      stack: ["Digital Forensics", "Threat Hunting", "SIEM"],
    },
    {
      img: require("../images/aws.png"),
      title: "AWS Certified Cloud Practitioner",
      description:
        "Validated understanding of the AWS Cloud platform, including security, compliance, and the shared responsibility model.",
      stack: ["Cloud Security", "AWS Services", "Compliance"],
    },
    {
      img: require("../images/tryhackme.png"),
      title: "TryHackMe Security Analyst L1",
      description:
        "Practical experience in SOC operations. Skilled in analyzing logs, investigating alerts, and utilizing industry-standard security tools.",
      stack: ["SOC Operations", "Log Analysis", "Traffic Analysis"],
    },
  ],
};

export const ContactInfo = {
  id: "contact",
  title: "GET IN TOUCH",
  email: "joshuapiesta@gmail.com",
  emailLogo: require("../images/email.png"),
  socials: [
    {
      img: require("../images/medium.png"),
      alt: "Medium",
      link: "https://medium.com/@joshuapiesta",
    },
    {
      img: require("../images/linkedin.png"),
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/jpiesta/",
    },
  ],
};
