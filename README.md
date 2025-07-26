# Professional Portfolio Website

A modern, responsive portfolio website built with React to showcase your skills, projects, certifications, and professional achievements to potential employers.

## Features

- **Modern Design**: Clean, professional UI with animations and transitions
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Light/Dark Mode**: Toggle between light and dark themes
- **Multiple Sections**:
  - Home page with hero section and skills overview
  - About page with personal information and timeline
  - Projects showcase with filtering capability
  - Certifications and achievements display
  - Contact form and information
- **Built with React**: Component-based architecture for easy maintenance and updates
- **Styled Components**: Modern CSS-in-JS styling solution
- **Framer Motion**: Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone this repository or download it
2. Navigate to the project directory
3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser

## Customization

### Personal Information

Update your personal information in each component:

- Edit components in `src/pages/` to add your information
- Update contact details in `src/pages/Contact.js`
- Modify project showcase in `src/pages/Projects.js`
- Update certifications in `src/pages/Certifications.js`
- Add your experience and education in `src/pages/About.js`

### Styling

- Color themes can be modified in `src/styles/Themes.js`
- Global styles are in `src/styles/GlobalStyles.js` and `src/styles/index.css`

### Adding Projects

Add your projects by updating the `projectsData` array in `src/pages/Projects.js`:

```javascript
{
  id: 7, // Increment ID
  title: 'Your Project Name',
  description: 'Brief description of your project',
  image: '/project-image.jpg', // Add image to public folder
  tags: ['React', 'Node.js', 'MongoDB'], // Technologies used
  category: 'web', // Category for filtering
  demoLink: 'https://your-demo-link.com',
  codeLink: 'https://github.com/yourusername/project-repo'
}
```

### Adding Certifications

Add your certifications by updating the `certificationsData` array in `src/pages/Certifications.js`.

## Deployment

You can deploy this website to various platforms:

### GitHub Pages

1. Install GitHub Pages package:

```bash
npm install --save gh-pages
```

2. Add the following to your `package.json`:

```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  // other scripts
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:

```bash
npm run deploy
```

### Netlify/Vercel

1. Create an account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)
2. Connect your GitHub repository
3. Set the build command to `npm run build` and publish directory to `build`

## Project Structure

```
├── public/               # Public assets
├── src/
│   ├── assets/           # Images and static files
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── styles/           # Global styles and themes
│   ├── App.js            # Main App component
│   └── index.js          # Entry point
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images