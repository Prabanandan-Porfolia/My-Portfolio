"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

interface ProjectHeroProps {
  title: string;
  logo: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectHero = ({ title, logo, description, tags }: ProjectHeroProps) => {
  return (
    <section className="pt-32 pb-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-orange-600 uppercase leading-none">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-orange-600/10 text-orange-600 dark:text-orange-400 border-none px-4 py-1.5 text-sm font-medium rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-orange-600/10 rounded-full scale-105 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center rounded-full border-4 border-accent/50 shadow-2xl bg-card overflow-hidden">
                <img 
                  src={logo} 
                  alt={`${title} logo`} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;