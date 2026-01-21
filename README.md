# Surabhi Bishwas - Portfolio Website

A modern, professional portfolio website built with React, showcasing frontend development expertise and professional experience.

## Features

- **Modern Design**: Clean, premium design with soft yellow and green accents
- **Responsive**: Fully responsive for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for subtle micro-interactions
- **Performance Optimized**: Fast loading and optimized for performance
- **Accessible**: Semantic HTML and accessible components

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment. Simply push to the `main` branch and the site will be automatically built and deployed.

### Manual Deployment

1. Install gh-pages (if not already installed):
```bash
npm install --save-dev gh-pages
```

2. Build and deploy:
```bash
npm run deploy
```

This will:
- Build the production bundle in the `dist` folder
- Deploy it to the `gh-pages` branch
- Make it available at `https://surabhibishwas.github.io/portfolio/`

### GitHub Pages Settings

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Set source to **GitHub Actions** (for automatic deployment) or **Deploy from a branch** → **gh-pages** → **/ (root)** (for manual deployment)
4. The site will be available at: `https://surabhibishwas.github.io/portfolio/`

**Note**: The base path is set to `/portfolio/` in `vite.config.js`. If your repository name is different, update the `base` value accordingly.

## Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Navigation.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Professional summary and expertise
3. **Skills**: Categorized technical skills
4. **Experience**: Professional experience timeline
5. **Projects**: Key projects and achievements
6. **Achievements**: Recognition and impact metrics
7. **Contact**: Contact information and social links

## Customization

All content is editable directly in the component files. Update the data objects in each component to customize the portfolio content.

### Adding Your Profile Photo

1. Place your profile photo in the `public` folder
2. Name it `profile-photo.jpg` (or update the filename in `src/components/Hero.jsx`)
3. Recommended size: 512x512px or larger (square image works best)
4. The image will automatically display with a circular frame and gradient background

### Resume Link

The resume link is configured to open in a new tab from Google Drive. Users can view and download it from there. The link is set in `src/components/Hero.jsx`.

## License

This project is private and personal.

