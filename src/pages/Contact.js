import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 5rem 0;
`;

const ContactContainer = styled.div`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const ContactMethods = styled.div`
  margin-bottom: 2rem;
`;

const ContactMethod = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const ContactDetails = styled.div``;

const ContactType = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const ContactValue = styled.p`
  color: ${({ theme }) => theme.secondary};
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.primary};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadow};
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-5px);
  }
`;

const ContactFormContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}33;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}33;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.border};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FormMessage = styled.div`
  padding: 1rem;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
  background-color: ${({ success, theme }) => 
    success ? theme.success + '20' : theme.error + '20'};
  color: ${({ success, theme }) => 
    success ? theme.success : theme.error};
  border: 1px solid ${({ success, theme }) => 
    success ? theme.success : theme.error};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Email configuration for sending to chaithanya.n2001@gmail.com
    const serviceId = 'service_id'; // Replace with your EmailJS service ID
    const templateId = 'template_id'; // Replace with your EmailJS template ID
    const userId = 'user_id'; // Replace with your EmailJS user ID
    
    // Using EmailJS to send the form data
    emailjs.send(serviceId, templateId, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'chaithanya.n2001@gmail.com'
    }, userId)
    .then(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitResult(null);
      }, 5000);
    })
    .catch(error => {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitResult({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    });
  };
  
  return (
    <ContactSection>
      <ContactContainer>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionDescription>
          Feel free to contact me for any work or suggestions. I'll get back to you as soon as possible.
        </SectionDescription>
        
        <ContactContent>
          <ContactInfo>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            <ContactMethods>
              <ContactMethod
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <i className="fas fa-envelope"></i>
                </ContactIcon>
                <ContactDetails>
                  <ContactType>Email</ContactType>
                  <ContactValue>
                    <ContactLink href="mailto:chaithanya.n2001@gmail.com">
                      chaithanya.n2001@gmail.com
                    </ContactLink>
                  </ContactValue>
                </ContactDetails>
              </ContactMethod>
              
              <ContactMethod
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <i className="fas fa-phone"></i>
                </ContactIcon>
                <ContactDetails>
                  <ContactType>Phone</ContactType>
                  <ContactValue>
                    <ContactLink href="tel:+916303767407">
                      +91 6303767407
                    </ContactLink>
                  </ContactValue>
                </ContactDetails>
              </ContactMethod>
              
              <ContactMethod
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <ContactIcon>
                  <i className="fas fa-map-marker-alt"></i>
                </ContactIcon>
                <ContactDetails>
                  <ContactType>Location</ContactType>
                  <ContactValue>India</ContactValue>
                </ContactDetails>
              </ContactMethod>
            </ContactMethods>
            
            <ContactInfoTitle>Connect With Me</ContactInfoTitle>
            <SocialLinks>
              <SocialLink href="https://github.com/nchaithanya" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/chaithanya-nachukuru" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactFormContainer>
            <ContactForm onSubmit={handleSubmit}>
              {submitResult && (
                <FormMessage success={submitResult.success}>
                  {submitResult.message}
                </FormMessage>
              )}
              
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </ContactForm>
          </ContactFormContainer>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;