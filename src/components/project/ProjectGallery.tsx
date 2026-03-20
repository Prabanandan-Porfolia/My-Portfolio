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
              <div className="p-1 space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                  <img 
                    src={image.url} 
                    alt={image.caption} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-orange-600 uppercase tracking-wider">
                    {image.caption}
                  </p>
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