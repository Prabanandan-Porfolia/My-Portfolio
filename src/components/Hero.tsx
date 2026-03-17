"use client";

import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200 bg-indigo-50/50 px-3 py-1">
                Available for new opportunities
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                PRABANANDAN <span className="text-indigo-600">ANANDHAMURUGAN</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                Software Developer — <span className="text-foreground">JAVA Specialist</span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Java Software Developer with 2+ years of professional industry experience in backend development, 
              specializing in Java, Spring Boot, and RESTful microservices. I build secure, scalable 
              enterprise applications with a strong foundation in modern software architecture.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/50 px-3 py-2 rounded-lg">
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>9807praba@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/50 px-3 py-2 rounded-lg">
                <Phone className="w-4 h-4 text-indigo-500" />
                <span>+94 766 577 855</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/50 px-3 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>Nawalapitiya, Sri Lanka</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8">
                Contact Me
              </Button>
              <Button variant="outline" className="rounded-full px-8 gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;