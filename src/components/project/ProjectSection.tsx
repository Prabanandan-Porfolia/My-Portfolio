"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface ProjectSectionProps {
  title: string;
  icon?: any;
  children: React.ReactNode;
  className?: string;
}

const ProjectSection = ({ title, icon: Icon, children, className }: ProjectSectionProps) => {
  return (
    <div className={cn("space-y-6 p-8 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm", className)}>
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="p-2 bg-orange-600/10 rounded-lg">
            <Icon className="w-5 h-5 text-orange-600" />
          </div>
        )}
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      </div>
      <div className="text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default ProjectSection;