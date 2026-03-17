"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Code2, User, FolderKanban } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'About', path: '/', icon: User },
    { name: 'Projects', path: '/projects', icon: FolderKanban },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
          <div className="p-1.5 bg-orange-600 rounded-lg">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="hidden xs:inline">Prabanandan.A</span>
        </Link>
        
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                location.pathname === item.path 
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-200 dark:shadow-none" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          ))}
          <div className="ml-2 pl-2 border-l border-border">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;