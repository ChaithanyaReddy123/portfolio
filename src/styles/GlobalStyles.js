import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section {
    padding: 5rem 0;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    color: ${({ theme }) => theme.primary};
  }

  .section-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.accent};
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: ${({ theme }) => theme.primary};
    color: white;
    border-radius: 5px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .btn:hover {
    background: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  }
`;