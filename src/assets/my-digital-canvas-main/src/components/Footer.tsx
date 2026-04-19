import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-dark py-8 px-4 text-center">
    <p className="text-primary-foreground/40 text-sm flex items-center justify-center gap-1">
      © {new Date().getFullYear()} Waziri,SW. Built with
      <Heart size={14} className="text-gold" />
    </p>
  </footer>
);

export default Footer;
