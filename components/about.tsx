"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, User, Code, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block">
              <h2 className="text-4xl lg:text-5xl font-bold text-balance relative inline-block">
                About
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-1 bg-primary rounded-full mt-2 absolute bottom-0 left-0" 
                />
              </h2>
            </motion.div>
          </div>

          {/* Content Container */}
          <div className="grid lg:grid-cols-5 gap-12 items-start bg-card/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/50">
            
            {/* Text Content - 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <User className="text-primary h-6 w-6 shrink-0" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Background</h3>
                  <p className="text-lg leading-relaxed">
                    I'm a dedicated third-year BCA student with a passion for
                    technology and innovation. My journey in computer application
                    has led me to explore various domains including mobile app
                    development, web technologies, and artificial intelligence.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Lightbulb className="text-primary h-6 w-6 shrink-0" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Philosophy</h3>
                  <p className="text-lg leading-relaxed">
                    I believe in continuous learning and staying updated with the
                    latest technological trends. My goal is to create meaningful
                    solutions that can make a positive impact on people's lives
                    through technology.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Code className="text-primary h-6 w-6 shrink-0" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Interests</h3>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, you can find me exploring new frameworks,
                    contributing to open-source projects, or learning about emerging
                    technologies in the field of computer science.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Resume Button - 2 columns */}
            <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-8 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-card p-8 rounded-xl border border-border shadow-xl w-full max-w-xs relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full"></div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-3">My Resume</h3>
                  <p className="text-sm text-muted-foreground">Download my complete resume to learn more about my skills and experience</p>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Button
                    className="w-full py-6 transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                    asChild>
                    <a href="/janba resume.pdf" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
