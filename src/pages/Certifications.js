import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificationsSection = styled.section`
  padding: 5rem 0;
`;

const CertificationsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.accent};
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: ${({ theme }) => theme.secondary};
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const CertificationCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CertificationHeader = styled.div`
  background: ${({ theme }) => theme.primary};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CertificationLogo = styled.div`
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
  }
`;

const CertificationIssuer = styled.h3`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
`;

const CertificationContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CertificationTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const CertificationDate = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const CertificationDescription = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const CertificationLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  transition: color 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
  
  i {
    font-size: 1.2rem;
  }
`;

const AchievementsSection = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.background};
`;

const AchievementsList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AchievementItem = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AchievementIcon = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  i {
    color: white;
    font-size: 2rem;
  }
`;

const AchievementContent = styled.div``;

const AchievementTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const AchievementDescription = styled.p`
  color: ${({ theme }) => theme.secondary};
`;

// Sample data
const certificationsData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: 'December 2023',
    description: 'Advanced expertise in designing distributed systems and deploying applications on AWS infrastructure with focus on security, reliability, and performance optimization.',
    icon: 'fab fa-aws',
    verificationLink: 'https://verification-link.com'
  },
  {
    id: 2,
    title: 'Oracle Certified Professional: Java SE 11 Developer',
    issuer: 'Oracle',
    date: 'September 2023',
    description: 'Demonstrated proficiency in Java programming language, including core APIs, collections, concurrency, functional programming, and modular applications.',
    icon: 'fab fa-java',
    verificationLink: 'https://verification-link.com'
  },
  {
    id: 3,
    title: 'Spring Professional Certification',
    issuer: 'VMware',
    date: 'July 2022',
    description: 'Expert-level knowledge of Spring Framework, Spring Boot, dependency injection, AOP, data access, and Spring Security.',
    icon: 'fas fa-leaf',
    verificationLink: 'https://verification-link.com'
  },
  {
    id: 4,
    title: 'Kubernetes Application Developer (CKAD)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'March 2022',
    description: 'Certified in designing, building, and deploying cloud-native applications using Kubernetes containers orchestration.',
    icon: 'fas fa-dharmachakra',
    verificationLink: 'https://verification-link.com'
  },
  {
    id: 5,
    title: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    date: 'November 2021',
    description: 'Proficient in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.',
    icon: 'fab fa-microsoft',
    verificationLink: 'https://verification-link.com'
  },
  {
    id: 6,
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: 'August 2021',
    description: 'Advanced certification in React.js front-end development, state management, hooks, and modern React patterns for building scalable web applications.',
    icon: 'fab fa-react',
    verificationLink: 'https://verification-link.com'
  }
];

const achievementsData = [
  {
    id: 1,
    title: 'Bravo Award',
    description: 'Received Bravo Award from Optum for delivering an insightful presentation on Retrieval Augmented Generation (RAG) chatbot technology and its practical applications.',
    icon: 'fas fa-award'
  },
  {
    id: 2,
    title: 'Technical Innovation Award',
    description: 'Received company-wide recognition for implementing a microservices architecture that reduced system response time by 60% and improved scalability.',
    icon: 'fas fa-lightbulb'
  },
  {
    id: 3,
    title: 'Java Community Leader',
    description: 'Active contributor to Java community with over 500 GitHub stars on open source projects and multiple accepted pull requests to major frameworks.',
    icon: 'fas fa-code-branch'
  },
  {
    id: 4,
    title: 'Cloud Migration Expert',
    description: 'Successfully led a team that migrated a legacy monolithic application to AWS cloud infrastructure, resulting in 40% cost reduction and improved reliability.',
    icon: 'fas fa-cloud'
  },
  {
    id: 5,
    title: 'Technical Conference Speaker',
    description: 'Presented at multiple tech conferences on topics including Java optimization, cloud architecture, and modern React development patterns.',
    icon: 'fas fa-microphone'
  }
];

const Certifications = () => {
  return (
    <>
      <CertificationsSection>
        <CertificationsContainer>
          <SectionTitle>Certifications</SectionTitle>
          <SectionDescription>
            Professional certifications that validate my expertise and commitment to continuous learning.
          </SectionDescription>
          
          <CertificationsGrid>
            {certificationsData.map((cert) => (
              <CertificationCard
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CertificationHeader>
                  <CertificationIssuer>{cert.issuer}</CertificationIssuer>
                  <CertificationLogo>
                    <i className={cert.icon}></i>
                  </CertificationLogo>
                </CertificationHeader>
                <CertificationContent>
                  <CertificationTitle>{cert.title}</CertificationTitle>
                  <CertificationDate>Issued: {cert.date}</CertificationDate>
                  <CertificationDescription>{cert.description}</CertificationDescription>
                  <CertificationLink href={cert.verificationLink} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-certificate"></i>
                    View Certificate
                  </CertificationLink>
                </CertificationContent>
              </CertificationCard>
            ))}
          </CertificationsGrid>
        </CertificationsContainer>
      </CertificationsSection>
      
      <AchievementsSection>
        <CertificationsContainer>
          <SectionTitle>Achievements</SectionTitle>
          <SectionDescription>
            Recognition and accomplishments from my professional journey.
          </SectionDescription>
          
          <AchievementsList>
            {achievementsData.map((achievement) => (
              <AchievementItem
                key={achievement.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <AchievementIcon>
                  <i className={achievement.icon}></i>
                </AchievementIcon>
                <AchievementContent>
                  <AchievementTitle>{achievement.title}</AchievementTitle>
                  <AchievementDescription>{achievement.description}</AchievementDescription>
                </AchievementContent>
              </AchievementItem>
            ))}
          </AchievementsList>
        </CertificationsContainer>
      </AchievementsSection>
    </>
  );
};

export default Certifications;