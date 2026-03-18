"use client";

import React, { useState } from 'react';
import { Mail, Send, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Constructing the mailto link
    const subject = encodeURIComponent(`Collaboration Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:9807praba@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
  };

  return (
    <section id="contact" className="py-16 px-4 bg-accent/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-orange-600 rounded-lg">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Let's Connect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Building the future of enterprise software</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am always open to discussing high-impact projects, technical challenges, or strategic collaborations. 
              If you are looking for a dedicated engineer to bring a robust vision to life or want to consult on backend architecture, 
              reach out and let's start a conversation.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Direct Line</p>
                <p className="font-bold">9807praba@gmail.com</p>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-accent/50 border-none"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-accent/50 border-none"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Describe your project or inquiry..." 
                      className="min-h-[120px] bg-accent/50 border-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white gap-2 py-6 text-lg rounded-xl transition-all">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;