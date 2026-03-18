"use client";

import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  const linkedinUrl = "https://www.linkedin.com/in/prabanandan-anandhamurugan-7b2720345";
  const email = "9807praba@gmail.com";

  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-medium text-muted-foreground tracking-tight">
                Prabanandan Anandhamurugan
              </h1>
              <div className="space-y-2">
                <h2 className="text-4xl md:text-6xl font-black text-orange-600 tracking-tighter leading-none uppercase">
                  Software Engineer
                </h2>
                <div className="relative inline-block">
                  <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-none uppercase">
                    Java
                  </h2>
                  <div className="absolute -bottom-1 left-0 w-full h-3 bg-orange-600/20 rounded-full -z-10" />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <TooltipProvider>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full bg-accent/50 hover:bg-orange-600 hover:text-white transition-all w-10 h-10">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={`mailto:${email}`}>
                      <Button variant="ghost" size="icon" className="rounded-full bg-accent/50 hover:bg-orange-600 hover:text-white transition-all w-10 h-10">
                        <Mail className="w-5 h-5" />
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-orange-600 text-white border-none">
                    <p>{email}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="rounded-xl px-8 py-6 text-lg font-bold border-2 border-muted-foreground/20 hover:bg-accent bg-transparent transition-all hover:border-orange-600/50">
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              {/* Large Circular Background */}
              <div className="absolute inset-0 bg-accent/20 rounded-full scale-95 animate-pulse" />
              
              {/* Image Container */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full border-8 border-accent/30 shadow-2xl">
                <img 
                  src="/my-photo.jpg" 
                  alt="Prabanandan Anandhamurugan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 z-10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;