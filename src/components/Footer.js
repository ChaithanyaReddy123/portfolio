import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/chaithanya-nachukuru" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </SocialLink>
          <SocialLink href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-leetcode"></i>
          </SocialLink>
          <SocialLink href="mailto:your.email@example.com">
            <i className="fas fa-envelope"></i>
          </SocialLink>
        </SocialLinks>
        <Copyright>© {currentYear} My Portfolio. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;