"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProjectHeaderProps {
  title: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectHeader = ({ title, githubUrl, liveUrl }: ProjectHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/projects">
            <Button variant="ghost" size="sm" className="gap-2 rounded-full hover:bg-accent">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Projects</span>
            </Button>
          </Link>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <h1 className="font-bold text-sm sm:text-base truncate max-w-[150px] sm:max-w-none">
            {title}
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="w-4 h-4" />
              </Button>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;