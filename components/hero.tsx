"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

// Static version for server-side rendering
const StaticHero = () => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      {/* Content Section */}
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <Terminal size={20} />
            </div>
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <Code size={20} />
            </div>
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <Sparkles size={20} />
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-balance relative">
            Janba Gholase
            <span className="absolute -bottom-2 left-0 h-1 w-24 bg-primary rounded-full"></span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground font-light">
            Aspiring Developer
          </p>
        </div>

        {/* Description */}
        <div className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/80 to-primary/0 rounded-full"></div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg pl-4">
            Passionate about Android Development, Web Technologies, and
            AI-powered solutions. Currently in my third year of BCA, building
            innovative projects and expanding my technical expertise with modern
            technologies.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 rounded-xl group relative overflow-hidden">
            <a href="#projects" className="flex items-center gap-2 px-6">
              <span>View My Work</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="rounded-xl border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 pt-4">
          <a
            href="https://github.com/Surajgholase"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="GitHub Profile">
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/janba-gholase5"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="LinkedIn Profile">
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:surajgholase41@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="Email Contact">
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <div className="relative w-full h-full max-w-md mx-auto">
          {/* Profile Image with Frame */}
          <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-background shadow-2xl bg-gradient-to-br from-primary/20 to-background p-1">
            <div className="rounded-xl overflow-hidden relative z-10">
              <img
                src="/profile_photo.png"
                alt="Janba Gholase"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-8 h-8">
              <div className="absolute top-0 right-0 w-4 h-1 bg-primary rounded-full"></div>
              <div className="absolute top-0 right-0 w-1 h-4 bg-primary rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-8 h-8">
              <div className="absolute bottom-0 left-0 w-4 h-1 bg-primary rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-1 h-4 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Animated version for client-side rendering
const AnimatedHero = () => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-20 right-[20%] w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    <div className="absolute top-[40%] left-[5%] w-2 h-2 bg-primary rounded-full"></div>
    <div className="absolute top-[30%] right-[15%] w-3 h-3 bg-primary rounded-full"></div>
    <div className="absolute bottom-[25%] left-[25%] w-2 h-2 bg-primary rounded-full"></div>
    
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary/10 p-2 rounded-full text-primary">
              <Terminal size={20} />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/10 p-2 rounded-full text-primary">
              <Code size={20} />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary/10 p-2 rounded-full text-primary">
              <Sparkles size={20} />
            </motion.div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold text-balance relative">
            Janba Gholase
            <span className="absolute -bottom-2 left-0 h-1 w-24 bg-primary rounded-full"></span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl text-muted-foreground font-light">
            Aspiring Developer
          </motion.p>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/80 to-primary/0 rounded-full"></div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg pl-4">
            Passionate about Android Development, Web Technologies, and
            AI-powered solutions. Currently in my third year of BCA, building
            innovative projects and expanding my technical expertise with modern
            technologies.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 rounded-xl group relative overflow-hidden">
            <a href="#projects" className="flex items-center gap-2 px-6">
              <span>View My Work</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></span>
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="rounded-xl border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all">
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-5 pt-4">
          <a
            href="https://github.com/Surajgholase"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="GitHub Profile">
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/janba-gholase5"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="LinkedIn Profile">
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:surajgholase41@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="Email Contact">
            <Mail size={22} />
          </a>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative">
        <div className="relative w-full h-full max-w-md mx-auto">
          {/* Profile Image with Frame */}
          <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-background shadow-2xl bg-gradient-to-br from-primary/20 to-background p-1">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent z-0"></div>
            <div className="rounded-xl overflow-hidden relative z-10">
              <img
                src="/profile_photo.png"
                alt="Janba Gholase"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-8 h-8">
              <div className="absolute top-0 right-0 w-4 h-1 bg-primary rounded-full"></div>
              <div className="absolute top-0 right-0 w-1 h-4 bg-primary rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-8 h-8">
              <div className="absolute bottom-0 left-0 w-4 h-1 bg-primary rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-1 h-4 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/10 rounded-full blur-xl" />
          
          {/* Tech Dots */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -right-6 top-1/4 bg-primary/80 w-3 h-3 rounded-full" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute -left-4 bottom-1/3 bg-primary/80 w-2 h-2 rounded-full" 
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Use static version for server-side rendering and animated version for client-side
  return isMounted ? <AnimatedHero /> : <StaticHero />;
}
