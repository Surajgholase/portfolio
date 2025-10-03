"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  Star, 
  Terminal 
} from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "TalkingBuddy",
    description:
      "An Android chatbot app powered by Hugging Face's NLP models, featuring text and voice-based interactions with a sleek XML-based UI and Google Voice Input for hands-free use.",
    image: "/chatboat1.jpg",
    tech: ["Java", "XML", "Hugging Face API", "Google Voice API", "Retrofit"],
    githubUrl: "https://github.com/Surajgholase/talkingbuddy.git",
    category: "Mobile App",
    icon: <Terminal className="h-5 w-5" />
  },
  {
    title: "Task Web Application",
    description:
      "A lightweight, single-page task manager running entirely in the browser, with task creation, editing, searching, and deletion, using LocalStorage for persistent data.",
    image: "/taskapp.png",
    tech: ["HTML", "CSS", "Vanilla JavaScript", "Bootstrap 5", "LocalStorage"],
    githubUrl: "https://github.com/Surajgholase/task-web-application.git",
    category: "Web App",
    icon: <Code className="h-5 w-5" />
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform built with React and Vite, featuring product listings, a cart system, and smooth navigation with React Router.",
    image: "/ecommerce.png",
    tech: ["React", "Vite", "JavaScript", "CSS3", "React Router"],
    githubUrl: "https://github.com/Surajgholase/E-commerce.git",
    category: "Web App",
    icon: <Layers className="h-5 w-5" />
  },
  {
    title: "Blood Center Management",
    description:
      "A management system for blood centers, designed to streamline operations (assumed functionality due to lack of README details).",
    image: "/blood_bank.png",
    tech: [
      "PHP 7.4+ (Core PHP, PDO)",
      "MySQL 5.7+",
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "Bootstrap 5.3",
      "Font Awesome 6.4",
      "Chart.js",
    ],
    githubUrl: "https://github.com/Surajgholase/blood-center-management.git",
    category: "Web App",
    icon: <Code className="h-5 w-5" />
  },
  {
    title: "Personal Notes App",
    description:
      "A simple application for managing personal notes, likely featuring note creation and storage (assumed functionality due to lack of README details).",
    image: "/personal-notes-app-interface.jpg",
    tech: ["Java", "xml"],
    githubUrl: "https://github.com/Surajgholase/Personal-Notes-App.git",
    category: "Mobile App",
    icon: <Terminal className="h-5 w-5" />
  },
  {
    title: "Earthquake Visualizer",
    description:
      "A real-time earthquake visualizer using USGS GeoJSON data, featuring an interactive map with magnitude-based markers, filters, and popups, built with React and React-Leaflet.",
    image: "/earthquake-visualizer-interface.png",
    tech: ["React", "Vite", "Tailwind CSS", "React-Leaflet", "JavaScript"],
    liveUrl: "https://earthquake-visualizer-liart.vercel.app/",
    githubUrl: "https://github.com/Surajgholase/earthquake-visualizer.git",
    category: "Web App",
    icon: <Sparkles className="h-5 w-5" />
  },
];

// Background decorative elements
const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background/0 opacity-50" />
    
    {/* Decorative elements */}
    <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
    
    {/* Code-like decorative elements */}
    <div className="absolute top-40 right-20 text-primary/10 text-8xl font-mono">{"{ }"}</div>
    <div className="absolute bottom-40 left-20 text-primary/10 text-8xl font-mono">{"</>"}</div>
  </div>
);

export function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  return (
    <motion.section 
      id="projects" 
      className="py-24 px-6 relative overflow-hidden"
      ref={containerRef}
    >
      <BackgroundElements />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16">
          
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">My Work</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-balance relative inline-block">
              Projects
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-primary rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects showcasing my skills in modern web
              development and mobile application design
            </p>
          </div>

          <motion.div 
            style={{ opacity, y }}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-background/80 backdrop-blur-sm text-xs font-medium rounded-full flex items-center gap-1.5 border border-border/50">
                    {project.icon}
                    {project.category}
                  </div>
                  
                  {/* Image with overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-card hover:bg-card/80">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
