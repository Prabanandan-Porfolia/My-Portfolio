"use client";

import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Information Technology (BIT)",
    institution: "University of Colombo",
    location: "Colombo, Sri Lanka",
    period: "Jan 2021 - Dec 2023",
    details: "Second Lower Class"
  },
  {
    degree: "Diploma in Computer Studies with Java Specialization",
    institution: "Alphasoft School of Computing",
    location: "Nawalapitiya",
    period: "June 2019 - Dec 2019"
  },
  {
    degree: "G.C.E. Advanced Level (Mathematics)",
    institution: "High School",
    location: "Sri Lanka",
    period: "2017"
  }
];

const Education = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-border/50 bg-accent/10">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg leading-tight">{edu.degree}</h3>
                    <p className="text-indigo-600 font-medium">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                {edu.details && (
                  <p className="mt-3 text-sm font-medium text-foreground/80">{edu.details}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;