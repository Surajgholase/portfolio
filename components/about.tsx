"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              About
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated third-year BCA student with a passion for
                technology and innovation. My journey in computer application
                has led me to explore various domains including mobile app
                development, web technologies, and artificial intelligence.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the
                latest technological trends. My goal is to create meaningful
                solutions that can make a positive impact on people's lives
                through technology.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new frameworks,
                contributing to open-source projects, or learning about emerging
                technologies in the field of computer.
              </p>
            </div>

            <div className="space-y-6 flex justify-center items-center">
              <Button
                className="w-[200px] hover:scale-105 transition-transform bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                asChild>
                <a href="/janba resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
