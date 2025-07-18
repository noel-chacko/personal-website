'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Camera } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { href: 'https://github.com/noel-chacko', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/noel-chacko/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://noelchacko.com', icon: Camera, label: 'Photography' },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Noel Chacko. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1 + index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-accent"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 