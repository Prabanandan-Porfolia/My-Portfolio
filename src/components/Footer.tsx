"use client";

import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-indigo-600">Prabanandan.A</h3>
            <p className="text-muted-foreground max-w-sm">
              Building robust and scalable backend solutions with Java and Spring Boot. 
              Passionate about clean code and modern architecture.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:9807praba@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-indigo-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span>9807praba@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <span>+94 766 577 855</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>86, Soysakella road, Nawalapitiya</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prabanandan Anandhamurugan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;