"use client";

import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-orange-600">Get in Touch</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="mailto:9807praba@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-orange-600 transition-colors">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>9807praba@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+94 766 577 855</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>86, Soysakella Road, Nawalapitiya</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prabanandan Anandhamurugan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/prabanandan-anandhamurugan-7b2720345" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-orange-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-orange-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;