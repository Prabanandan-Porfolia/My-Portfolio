"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectImage } from '@/data/projects';

interface ProjectGalleryProps {
  images: ProjectImage[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  return (
    <div className="py-8">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1 space-y-3">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-accent/10">
                  <img 
                    src={image.url} 
                    alt={image.caption} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center">
                  <span className="text-[10px] font-bold text-orange-600/80 uppercase tracking-[0.2em] bg-orange-600/5 px-3 py-1 rounded-full border border-orange-600/10">
                    {image.caption}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectGallery;