"use client";

import React from 'react';
import { ProjectImage } from '@/data/projects';

interface ProjectGalleryProps {
  images: ProjectImage[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  return (
    <div className="relative w-full">
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="flex-none w-[85vw] md:w-[700px] snap-center space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl bg-accent/5 group">
              <img 
                src={image.url} 
                alt={image.caption} 
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl" />
            </div>
            <div className="flex justify-center">
              <span className="text-[10px] font-bold text-orange-600/80 uppercase tracking-[0.2em] bg-orange-600/5 px-3 py-1 rounded-full border border-orange-600/10">
                {image.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll Indicator for better UX */}
      <div className="flex justify-center gap-1.5 mt-2">
        {images.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-600/20" />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;