import { Github, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => (
  <footer className="bg-teal-500 text-white text-center py-4 mt-8">
    <p className="text-sm">© 2025 Alex Angulo</p>
    <div className="flex justify-center gap-6 mt-2">
      <a href="https://github.com/a-angulo" target="_blank" className="hover:text-gray-400"><Github /></a>
      <a href="https://www.linkedin.com/in/alex-angulo1/" target="_blank" className="hover:text-gray-400"><Linkedin /></a>
    </div>
  </footer>
);

export default Footer;