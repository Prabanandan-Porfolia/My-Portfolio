"use client";

import React from 'react';
import { Mail, Send, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-accent/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Let's discuss your next project</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm currently available for new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email me at</p>
                <p className="font-bold">9807praba@gmail.com</p>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your Name" className="bg-accent/50 border-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-accent/50 border-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can I help you?" className="min-h-[120px] bg-accent/50 border-none" />
                </div>
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white gap-2 py-6 text-lg rounded-xl">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;