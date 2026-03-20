"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

interface ProjectHeroProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectHero = ({ title, description, tags, image }: ProjectHeroProps) => {
  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-orange-600 uppercase">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-accent/50 text-foreground border-none px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border/50"
          >
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;