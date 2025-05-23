export const HeroInfo = {
  id: "home",
  name: "Joshua Bobb Piesta",
  work: "Cyber Security",
  img: require("../images/logo.png"),
  alt: "mypic",
  description:
    "A passionate Cybersecurity Specialist dedicated to protecting digital assets and ensuring the integrity of information systems. Committed to delivering impactful security solutions, staying ahead of evolving threats, and contributing to a safer digital environment across all sectors.",
  buttonLabel: "RESUME",
};

export const AboutInfo = {
  id: "about",
  title: "ABOUT ME",
  img: require("../images/me.png"),
  alt: "aboutme",
  description: `I am a dedicated cybersecurity professional with a strong focus on the CIA triad. 
  My passion lies in protecting systems, 
  networks, and data from ever-evolving cyber threats. 
  I believe in proactive defense, continuous improvement, and strategic problem-solving. 
  Staying current with the latest tools and trends is a core part of my routine. 
  I’m committed to continuous learning and professional growth. My goal is to create secure digital environments 
  that empower individuals and organizations. 
  I aim to make a real impact by turning complex security challenges into effective, reliable solutions.`,
};

export const SkillsInfo = {
  id: "skills",
  title: "PLATFORMS",
  frontend: [
    {
      img: require("../images/bob/try.png"),
      percentage: "80%",
      background: "#E44D26",
    },
    {
      img: require("../images/bob/hack.png"),
      percentage: "60%",
      background: "#2062AF",
    },
    {
      img: require("../images/bob/tcm.png"),
      percentage: "80%",
      background: "#F0DB4F",
    },
    {
      img: require("../images/bob/web.png"),

      percentage: "60%",
      background: "#05A5D1",
    },
  ],
  api: [
    {
      img: require("../images/bob/pen.png"),
    },
    {
      img: require("../images/bob/def.png"),
    },
  ],
  backend: [
    {
      img: require("../images/bob/blue.png"),
      percentage: "90%",
      background: "#80BD01",
    },
    {
      img: require("../images/bob/cyberdef.png"),
      percentage: "70%",
      background: "#E10198",
    },
  ],
};

export const ProjectInfo = {
  id: "projects",
  title: "CERTIFICATES",
  projects: [
    {
      img: require("../images/ech.png"),
      title: "EC-Council Certified Ethical Hacker (CEH)",
      description:
        "Validated knowledge of ethical hacking techniques, attack vectors, and preventative countermeasures to assess and secure systems.",
      stack: ["Ethical Hacking", "Penetration Testing", "Network Security"],
    },
    {
      img: require("../images/comptia.png"),
      title: "CompTIA Security+",
      description:
        "Established foundational cybersecurity skills including threat management, risk mitigation, and network security concepts.",
      stack: ["Risk Management", "Threats", "Vulnerabilities"],
    },
    {
      img: require("../images/isc2.png"),
      title: "(ISC)² Certified in Cybersecurity (CC)",
      description:
        "Demonstrated core knowledge of cybersecurity principles, including security operations, network and system security, and access control.",
      stack: ["Security Principles", "Access Control", "Network Security"],
    },
    {
      img: require("../images/blueteam.png"),
      title: "Security Blue Team Certified - Blue Team Level 1 (BTL1)",
      description:
        "Proven skills in defensive security operations, incident response, threat intelligence, and network monitoring.",
      stack: ["Blue Teaming", "Threat Detection", "SOC Operations"],
    },
    {
      img: require("../images/aws.png"),
      title: "AWS Certified Cloud Practitioner",
      description:
        "Recognized understanding of cloud computing concepts, AWS services, and security best practices for cloud environments.",
      stack: ["AWS", "Cloud Fundamentals", "Security Best Practices"],
    },
    {
      img: require("../images/tryhackme.png"),
      title: "TryHackMe Security Analyst Level 1 (SAL1)",
      description:
        "Hands-on experience in real-world cybersecurity scenarios, focusing on SOC analysis, threat hunting, and basic forensics.",
      stack: ["SOC Analysis", "Threat Hunting", "Forensics"],
    },
  ],
};

export const ContactInfo = {
  id: "contact",
  title: "CONTACT",
  email: "joshuapiesta@gmail.com",
  emailLogo: require("../images/email.png"),
  socials: [
    {
      img: require("../images/medium.png"),
      alt: "medium",
      link: "https://medium.com/@joshuapiesta",
    },
    {
      img: require("../images/linkedin.png"),
      alt: "linkedin",
      link: "https://www.linkedin.com/in/jpiesta/",
    },
  ],
};
