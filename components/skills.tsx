"use client";

import { motion } from "framer-motion";
import { Code, Terminal, Layers, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Language",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["Java", "C++", "Kotlin", "Python"],
  },
  {
    title: "Frontend-Web & App",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      "XML",
      "Jetpack Compose",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: <Code className="h-6 w-6" />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16">
          
          {/* Section Header */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block">
              <h2 className="text-4xl lg:text-5xl font-bold text-balance relative inline-block">
                Skills
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-1 bg-primary rounded-full mt-2 absolute bottom-0 left-0" 
                />
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
              Technologies and tools I use to bring ideas to life
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                viewport={{ once: true }}
                className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "var(--primary-50)",
                        borderColor: "var(--primary-200)"
                      }}
                      className="bg-card/70 border border-border/60 rounded-lg p-3 text-center hover:shadow-md transition-all duration-300">
                      <span className="font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
