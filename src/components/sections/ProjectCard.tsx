'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full border-border/50 hover:border-border transition-colors duration-300 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gradient">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                viewport={{ once: true }}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 glow-on-hover"
                onClick={() => window.open(githubUrl, '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            )}
            
            {liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 glow-on-hover"
                onClick={() => window.open(liveUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard; 