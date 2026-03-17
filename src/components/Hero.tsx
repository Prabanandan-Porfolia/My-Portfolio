"use client";

import React from 'react';
import { Download, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <p className="text-xl font-medium text-muted-foreground">Hi I am</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Prabanandan Anandhamurugan
              </h1>
              <h2 className="text-5xl md:text-7xl font-black text-orange-600 tracking-tight">
                JAVA Specialist
              </h2>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-accent/50 hover:bg-orange-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-accent/50 hover:bg-orange-600 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-accent/50 hover:bg-orange-600 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-8 py-6 text-lg font-bold shadow-lg shadow-orange-600/20">
                Hire Me
              </Button>
              <Button variant="outline" className="rounded-xl px-8 py-6 text-lg font-bold border-2 border-muted-foreground/20 hover:bg-accent">
                Download CV
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="p-6 rounded-2xl bg-accent/30 border border-border/50">
                <p className="text-3xl font-black text-orange-600">2+</p>
                <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="p-6 rounded-2xl bg-accent/30 border border-border/50">
                <p className="text-3xl font-black text-orange-600">10+</p>
                <p className="text-sm text-muted-foreground font-medium">Projects Done</p>
              </div>
              <div className="p-6 rounded-2xl bg-accent/30 border border-border/50">
                <p className="text-3xl font-black text-orange-600">5+</p>
                <p className="text-sm text-muted-foreground font-medium">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-accent/20 rounded-full scale-110 -z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent rounded-full -z-10" />
              
              {/* Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-accent/50 shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/Prabanandan-Porfolia/My-Portfolio/main/public/profile.png" 
                  alt="Prabanandan Anandhamurugan"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    // Fallback if the image isn't found yet
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                  }}
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