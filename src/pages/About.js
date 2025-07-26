import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 0;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  text-align: center;
  
  img {
    width: 100%;
    max-width: 350px;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const AboutDetails = styled.div``;

const Bio = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const PersonalInfo = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1rem;
  
  span {
    font-weight: 600;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const EducationSection = styled(motion.div)`
  margin-top: 3rem;
`;

const EducationTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.border};
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0.5rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
  }
  
  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelinePeriod = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 0.5rem;
  display: block;
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const TimelineLocation = styled.span`
  color: ${({ theme }) => theme.accent};
  display: block;
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.text};
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContent>
          <ProfileImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/profile-placeholder.png" alt="N Chaithanya" />
          </ProfileImageContainer>
          
          <AboutDetails>
            <Bio
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              I am N Chaithanya, a solutions-driven Software Developer with specialized expertise in Azure cloud technologies, Java enterprise applications, and modern front-end frameworks. I focus on creating scalable, resilient applications that deliver real business value through thoughtful architecture and clean code.
              <br /><br />
              I lead development of web applications and cloud infrastructure that enhance reliability and scalability for 100+ daily users. My expertise includes building reusable React components that have reduced development time by 40% while improving application responsiveness by 25%. I've implemented CI/CD pipelines with 95%+ deployment success rates while mentoring junior developers to increase team productivity.
              <br /><br />
              Throughout my career, I've successfully led technical initiatives that have improved system reliability, reduced operational costs, and enhanced end-user experiences. I thrive in collaborative environments where I can contribute both technical expertise and strategic thinking to solve complex business challenges.
            </Bio>
            
            <PersonalInfo
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <InfoItem>
                <span>Name:</span> N Chaithanya
              </InfoItem>
              <InfoItem>
                <span>Email:</span> nchaithanya@email.com
              </InfoItem>
              <InfoItem>
                <span>Phone:</span> +1 234 567 8900
              </InfoItem>
              <InfoItem>
                <span>Location:</span> California, USA
              </InfoItem>
              <InfoItem>
                <span>Experience:</span> 5+ Years
              </InfoItem>
              <InfoItem>
                <span>Availability:</span> Available for hire
              </InfoItem>
            </PersonalInfo>
            
            <EducationSection
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <EducationTitle>Education & Experience</EducationTitle>
              <Timeline>
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <TimelinePeriod>2024 - Present</TimelinePeriod>
                  <TimelineTitle>Software Engineer</TimelineTitle>
                  <TimelineLocation>Optum(UHG)</TimelineLocation>
                  <TimelineDescription>
                    Lead developer for enterprise-scale applications using Java and Azure cloud infrastructure.
                    Designed and implemented microservices architecture using Azure App Service, Azure Functions, and Azure Kubernetes Service.
                    Established CI/CD pipelines with Azure DevOps for automated testing, deployment, and monitoring.
                  </TimelineDescription>
                </TimelineItem>
                
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <TimelinePeriod>2022 - 2024</TimelinePeriod>
                  <TimelineTitle>Associate Software Engineer</TimelineTitle>
                  <TimelineLocation>Optum(UHG)</TimelineLocation>
                  <TimelineDescription>
                    Developed responsive web applications using React.js frontend and Spring Boot backend.
                    Implemented containerized solutions with Docker and managed infrastructure with Azure.
                    Led integration of authentication services using Azure Active Directory and API Management.
                  </TimelineDescription>
                </TimelineItem>
                
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <TimelinePeriod>2018 - 2022</TimelinePeriod>
                  <TimelineTitle>Bachelor of Technology in Computer Science</TimelineTitle>
                  <TimelineLocation>Amrita Vishwa Vidyapeetham</TimelineLocation>
                  <TimelineDescription>
                    Graduated with honors in Computer Science with specialization in Software Engineering.
                    Completed capstone project on cloud-based application deployment and scaling.
                    Participated in coding competitions and hackathons.
                  </TimelineDescription>
                </TimelineItem>
              </Timeline>
            </EducationSection>
          </AboutDetails>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;