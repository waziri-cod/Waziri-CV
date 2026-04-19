import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#home" className="text-2xl font-bold tracking-tight text-primary">
            WS.
          </a>
          <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
            Building digital experiences that combine artistry with engineering.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="https://github.com/waziri-cod" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#https://linkedin.com/in/waziri-shaban" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:wazirishaban20@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <div className="text-sm font-medium text-muted-foreground">
            &copy; {2026} Waziri Shaban. All rights reserved.
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          Made with <Heart size={16} className="text-primary fill-primary" /> by waziri
        </div>
      </div>
    </footer>
  );
}