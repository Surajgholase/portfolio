"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "TalkingBuddy",
    description:
      "An Android chatbot app powered by Hugging Face's NLP models, featuring text and voice-based interactions with a sleek XML-based UI and Google Voice Input for hands-free use.",
    image: "/chatboat1.jpg",
    tech: ["Java", "XML", "Hugging Face API", "Google Voice API", "Retrofit"],
    githubUrl: "https://github.com/Surajgholase/talkingbuddy.git",
  },
  {
    title: "Task Web Application",
    description:
      "A lightweight, single-page task manager running entirely in the browser, with task creation, editing, searching, and deletion, using LocalStorage for persistent data.",
    image: "/taskapp.png",
    tech: ["HTML", "CSS", "Vanilla JavaScript", "Bootstrap 5", "LocalStorage"],
    githubUrl: "https://github.com/Surajgholase/task-web-application.git",
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform built with React and Vite, featuring product listings, a cart system, and smooth navigation with React Router.",
    image: "/ecommerce.png",
    tech: ["React", "Vite", "JavaScript", "CSS3", "React Router"],
    githubUrl: "https://github.com/Surajgholase/E-commerce.git",
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
  },
  {
    title: "Personal Notes App",
    description:
      "A simple application for managing personal notes, likely featuring note creation and storage (assumed functionality due to lack of README details).",
    image: "/personal-notes-app-interface.jpg",
    tech: ["Java", "xml"],
    githubUrl: "https://github.com/Surajgholase/Personal-Notes-App.git",
  },
  {
    title: "Earthquake Visualizer",
    description:
      "A real-time earthquake visualizer using USGS GeoJSON data, featuring an interactive map with magnitude-based markers, filters, and popups, built with React and React-Leaflet.",
    image: "/earthquake-visualizer-interface.png",
    tech: ["React", "Vite", "Tailwind CSS", "React-Leaflet", "JavaScript"],
    liveUrl: "https://earthquake-visualizer-liart.vercel.app/",
    githubUrl: "https://github.com/Surajgholase/earthquake-visualizer.git",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Projects
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects showcasing my skills in modern web
              development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
