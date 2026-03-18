"use client";

import React, { useState } from 'react';
import { Mail, Send, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Formspree for direct email sending
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID (e.g., 'mjvnbqrq')
      const response = await fetch("https://formspree.io/f/9807praba@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you shortly.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-accent/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-orange-600 rounded-lg">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Strategic Collaboration</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Let's build something exceptional</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am always open to discussing high-impact projects, technical challenges, or strategic partnerships. 
              Whether you're looking to scale your backend infrastructure or need an expert perspective on system design, 
              I'm ready to contribute.
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Describe your project or inquiry..." 
                      className="min-h-[120px] bg-accent/50 border-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white gap-2 py-6 text-lg rounded-xl transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
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