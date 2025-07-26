import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 5rem 0;
`;

const ProjectsContainer = styled.div`
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: ${({ active, theme }) => 
    active ? theme.primary : 'transparent'};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.text};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const ProjectDetails = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectTag = styled.span`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.secondary};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
  
  i {
    font-size: 1.2rem;
  }
`;

const ViewButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 2rem;
  font-weight: 600;
  transition: background 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent};
  }
`;

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'Enterprise Microservices Platform',
    description: 'Architected and implemented a scalable microservices platform using Spring Boot and AWS cloud services. Features include service discovery, load balancing, and fault tolerance patterns.',
    image: '/project-placeholder-1.jpg',
    tags: ['Java', 'Spring Boot', 'AWS', 'Microservices'],
    category: 'backend',
    demoLink: 'https://demo-link.com',
    codeLink: 'https://github.com/nchaithanya/microservices-platform'
  },
  {
    id: 2,
    title: 'Real-time Dashboard Application',
    description: 'Developed a responsive real-time analytics dashboard using React and WebSocket for data visualization. Implemented custom charts and data filtering capabilities.',
    image: '/project-placeholder-2.jpg',
    tags: ['React', 'Redux', 'WebSocket', 'D3.js'],
    category: 'web',
    demoLink: 'https://demo-link.com',
    codeLink: 'https://github.com/nchaithanya/analytics-dashboard'
  },
  {
    id: 3,
    title: 'Serverless API Gateway',
    description: 'Built a serverless API gateway using AWS Lambda and API Gateway with custom authentication and rate limiting. Reduced operational costs by 40% compared to traditional server-based architecture.',
    image: '/project-placeholder-3.jpg',
    tags: ['AWS Lambda', 'API Gateway', 'Serverless', 'Node.js'],
    category: 'cloud',
    demoLink: 'https://demo-link.com',
    codeLink: 'https://github.com/nchaithanya/serverless-api'
  },
  {
    id: 4,
    title: 'E-commerce Microservices Application',
    description: 'Designed and implemented a containerized e-commerce application with microservices for product catalog, order management, and user authentication. Deployed using Kubernetes for orchestration.',
    image: '/project-placeholder-4.jpg',
    tags: ['Java', 'Docker', 'Kubernetes', 'Spring Boot'],
    category: 'backend',
    demoLink: 'https://demo-link.com',
    codeLink: 'https://github.com/nchaithanya/ecommerce-microservices'
  },
  {
    id: 5,
    title: 'Content Management System',
    description: 'Created a headless CMS with React front-end and Java Spring Boot backend. Features include content versioning, role-based access control, and image optimization.',
    image: '/project-placeholder-5.jpg',
    tags: ['React', 'Java', 'Spring Boot', 'REST API'],
    category: 'web',
    demoLink: 'https://demo-link.com',
    codeLink: 'https://github.com/nchaithanya/headless-cms'
  },
  {
    id: 6,
    title: 'CI/CD Pipeline Automation',
    description: 'Implemented a robust CI/CD pipeline using Jenkins, Docker, and AWS, enabling automated testing and deployment of applications. Reduced deployment time by 70% and improved code quality.',
    image: '/project-placeholder-6.jpg',
    tags: ['Jenkins', 'Docker', 'AWS', 'CI/CD'],
    category: 'devops',
    demoLink: 'https://demo-link.com',
    codeLink: 'https://github.com/nchaithanya/cicd-automation'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);
    
  return (
    <ProjectsSection>
      <ProjectsContainer>
        <SectionTitle>My Projects</SectionTitle>
        <SectionDescription>
          Here are some of the projects I've worked on. Each project represents different challenges and solutions implemented.
        </SectionDescription>
        
        <FilterContainer>
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton
            active={filter === 'web'}
            onClick={() => setFilter('web')}
          >
            Web Applications
          </FilterButton>
          <FilterButton
            active={filter === 'backend'}
            onClick={() => setFilter('backend')}
          >
            Backend Services
          </FilterButton>
          <FilterButton
            active={filter === 'cloud'}
            onClick={() => setFilter('cloud')}
          >
            Cloud Solutions
          </FilterButton>
          <FilterButton
            active={filter === 'devops'}
            onClick={() => setFilter('devops')}
          >
            DevOps
          </FilterButton>
        </FilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <ViewButton>View Details</ViewButton>
                </div>
              </ProjectImage>
              <ProjectDetails>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </ProjectLink>
                  <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    Source Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectDetails>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;