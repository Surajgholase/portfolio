"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.4 },
};

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <motion.div
          initial={fadeInLeft.initial}
          animate={fadeInLeft.animate}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <motion.h1
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-balance">
              Janba Gholase
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
              className="text-xl lg:text-2xl text-muted-foreground font-light">
              Aspiring Developer
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Passionate about Android Development, Web Technologies, and
            AI-powered solutions. Currently in my third year of BCA, building
            innovative projects and expanding my technical expertise with modern
            technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.8 }}
            className="flex items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 1 }}
            className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/Surajgholase"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile">
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/janba-gholase5"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile">
              <Linkedin size={24} />
            </a>
            <a
              href="surajgholase41@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Contact">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div {...fadeInRight} className="relative">
          <div className="relative group">
            {/* Background Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />

            {/* Image Card */}
            <div className="relative bg-card border border-border rounded-2xl p-6 shadow-xl">
              <img
                src="/profile_photo.png"
                alt="Professional headshot"
                className="w-80 h-80 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
              {/* Online Status Indicator */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to About section">
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
