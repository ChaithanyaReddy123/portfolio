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
              I am N Chaithanya, a passionate software developer with a strong background in Java development, React front-end applications, and AWS cloud technologies. With a focus on building scalable and maintainable software solutions, I thrive in collaborative environments that embrace innovation and technical excellence.
              <br /><br />
              My technical expertise includes Java, Spring Boot, React, JavaScript, AWS services, SQL databases, RESTful API design, and microservices architecture. I am committed to writing clean, efficient code that follows best practices and delivers exceptional user experiences.
              <br /><br />
              Throughout my career, I have successfully delivered multiple projects, working closely with cross-functional teams to transform business requirements into technical solutions. I enjoy solving complex problems and continuously learning new technologies to stay at the forefront of the software development industry.
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
                  <TimelinePeriod>2021 - Present</TimelinePeriod>
                  <TimelineTitle>Senior Software Engineer</TimelineTitle>
                  <TimelineLocation>Tech Innovations Inc., California</TimelineLocation>
                  <TimelineDescription>
                    Lead developer for enterprise-scale applications using Java and AWS cloud infrastructure.
                    Architected and implemented microservices solutions with Spring Boot and RESTful APIs.
                    Mentored junior developers and conducted code reviews to ensure quality and best practices.
                  </TimelineDescription>
                </TimelineItem>
                
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <TimelinePeriod>2018 - 2021</TimelinePeriod>
                  <TimelineTitle>Full Stack Developer</TimelineTitle>
                  <TimelineLocation>Digital Solutions Group, California</TimelineLocation>
                  <TimelineDescription>
                    Developed and maintained web applications using React, Node.js, and Java.
                    Implemented CI/CD pipelines for automated testing and deployment.
                    Collaborated with cross-functional teams to deliver client projects on schedule.
                  </TimelineDescription>
                </TimelineItem>
                
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <TimelinePeriod>2014 - 2018</TimelinePeriod>
                  <TimelineTitle>Bachelor of Technology in Computer Science</TimelineTitle>
                  <TimelineLocation>Technical University, California</TimelineLocation>
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