# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing skills, projects, and professional experience with smooth animations and a clean design.

## 🌟 Features

- **Responsive Design**: Works seamlessly across all devices
- **Modern UI/UX**: Clean and professional interface with smooth animations
- **Dark/Light Theme**: Automatic theme switching
- **Performance Optimized**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development
- **Animation Effects**: Smooth scroll animations using Framer Motion
- **Contact Form**: Easy way for visitors to get in touch

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI Components
- **Package Manager**: npm/pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── hero.tsx           # Hero section
│   ├── about.tsx          # About section
│   ├── projects.tsx       # Projects showcase
│   ├── skills.tsx         # Skills section
│   ├── contact.tsx        # Contact form
│   └── ui/                # UI component library
├── public/                # Static assets
│   ├── professional-headshot.png
│   └── project-images/
├── lib/                   # Utility functions
└── styles/               # Additional styles
```

## 🎨 Customization

### Personal Information

Update your personal information in the components:

- **Hero Section**: `components/hero.tsx`
- **About Section**: `components/about.tsx`
- **Contact Information**: `components/contact.tsx`

### Projects

Add your projects in `components/projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    image: "/project-image.png",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
  },
];
```

### Skills

Update your skills in `components/skills.tsx`:

```typescript
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  // Add more skills...
];
```

### Images

Replace images in the `public/` folder:

- `professional-headshot.png` - Your profile photo
- Project screenshots
- Other assets

## 📱 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- Digital Ocean
- AWS

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

---

**⭐ If you find this project helpful, please give it a star!**
