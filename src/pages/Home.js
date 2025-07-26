import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
    padding-top: 2rem;
  }
`;

const HeroText = styled.div`
  flex: 1;
`;

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  padding: 0.8rem 2rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled(Link)`
  padding: 0.8rem 2rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ResumeLink = styled.a`
  padding: 0.8rem 2rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  i {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const SkillsSection = styled.section`
  background-color: ${({ theme }) => theme.background};
  padding: 5rem 0;
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

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

const SkillCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  i {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const HighlightsSection = styled.section`
  padding: 5rem 0;
`;

const HighlightsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const HighlightCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  i {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <Greeting
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </Greeting>
            <Name
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              N Chaithanya
            </Name>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Software Developer
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A results-oriented Software Developer with expertise in Azure cloud solutions, Java, and modern frontend frameworks like React. Specializing in building scalable enterprise applications and cloud-native solutions. Passionate about leveraging technology to solve complex business challenges with clean, efficient code.
            </Description>
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {/* <PrimaryButton to="/contact">Get In Touch</PrimaryButton> */}
              <SecondaryButton to="/projects">View Projects</SecondaryButton>
              <ResumeLink href="https://drive.google.com/file/d/12EArfhII6jmiVPtp6HMjkLQEsPvc-WMi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-alt"></i> Resume
              </ResumeLink>
            </ButtonGroup>
          </HeroText>
          <HeroImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={require('../img.jpeg')} alt="N Chaithanya" />
          </HeroImage>
        </HeroContent>
      </HeroSection>
      
      <SkillsSection>
        <SectionTitle>Skills</SectionTitle>
        <SkillsContainer>
          <SkillsGrid>
            <SkillCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <i className="fab fa-java"></i>
              <h3>Java</h3>
            </SkillCard>
            <SkillCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <i className="fab fa-react"></i>
              <h3>React</h3>
            </SkillCard>
            <SkillCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <i className="fab fa-microsoft azure-icon"></i>
              <h3>Azure</h3>
            </SkillCard>
            <SkillCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <i className="fab fa-js"></i>
              <h3>JavaScript</h3>
            </SkillCard>
            <SkillCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-database"></i>
              <h3>SQL</h3>
            </SkillCard>
            <SkillCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-server"></i>
              <h3>Spring Boot</h3>
            </SkillCard>
            <SkillCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-cloud"></i>
              <h3>Microservices</h3>
            </SkillCard>
            <SkillCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <i className="fab fa-docker"></i>
              <h3>Docker</h3>
            </SkillCard>
          </SkillsGrid>
        </SkillsContainer>
      </SkillsSection>
      
      <HighlightsSection>
        <SectionTitle>Career Highlights</SectionTitle>
        <HighlightsGrid>
          <HighlightCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <i className="fas fa-cloud"></i>
            <h3>Cloud Solutions</h3>
            <p>Designed and implemented scalable Azure cloud solutions including microservices architecture, containerized applications, and CI/CD pipelines.</p>
          </HighlightCard>
          <HighlightCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <i className="fas fa-code"></i>
            <h3>Full-Stack Development</h3>
            <p>Developed robust enterprise applications using Java/Spring Boot backends and modern React frontends, focused on performance and user experience.</p>
          </HighlightCard>
          <HighlightCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <i className="fas fa-project-diagram"></i>
            <h3>Technical Leadership</h3>
            <p>Led cross-functional teams in designing and implementing solutions that improved efficiency and reduced operational costs for clients.</p>
          </HighlightCard>
        </HighlightsGrid>
      </HighlightsSection>
    </>
  );
};

export default Home;