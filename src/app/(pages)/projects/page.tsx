'use client';

import Layout from '@/components/layout/Layout';
import ProjectCard from '@/components/sections/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Spotify Top Tracks",
    description: "Mobile-first Next.js 14 application that displays your Spotify top tracks for different time periods with smooth animations and a modern dark theme. Features Spotify OAuth integration, playlist creation, and direct Spotify links.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "NextAuth.js", "Spotify API"],
    githubUrl: "",
    liveUrl: "https://spotify-tracks-gold.vercel.app"
  },
  {
    title: "OverlayCam",
    description: "iOS camera app built with SwiftUI that allows users to recreate photos by importing a reference image as an overlay. Features include camera controls, opacity adjustment, aspect ratio matching, and photo library integration.",
    techStack: ["SwiftUI", "Swift", "iOS", "Camera API", "PhotosUI", "Xcode"],
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "Piglet Prep",
    description: "Team capstone project: Child-friendly educational video platform with interactive content featuring embedded Multiple Choice Questions and Object Detection questions. Built with real-time assessment, performance analytics, and AWS integration for video storage and AI-powered features.",
    techStack: ["Next.js", "TypeScript", "AWS S3", "AWS Rekognition", "OpenAI API", "MongoDB", "Tailwind CSS", "Jira", "Git"],
    githubUrl: "https://github.com/Capstone-Projects-2025-Spring/project-piggyback-learning-team-1",
    liveUrl: "https://pigletprep.vercel.app"
  },
  {
    title: "Reddit NBA Analytics",
    description: "Data analysis project using Reddit API to analyze NBA subreddit posts and comments. Features word frequency analysis, word cloud generation, and Excel export functionality. Built with natural language processing and data visualization.",
    techStack: ["Python", "Reddit API", "NLTK", "Pandas", "Matplotlib", "WordCloud", "Flask"],
    githubUrl: "https://github.com/noel-chacko/redditNBA",
    liveUrl: ""
  },
  {
    title: "ARC Scouting",
    description: "Basketball scouting platform that aggregates player rankings from multiple sources (ESPN, Rivals, 247Sports, On3) using web scraping. Features average composite rankings and a clean web interface to display top 50 players from each site.",
    techStack: ["Python", "Selenium", "HTML", "CSS", "JavaScript", "Web Scraping"],
    githubUrl: "https://github.com/noel-chacko/ARC",
    liveUrl: "https://noel-chacko.github.io/ARC/"
  }
];

export default function Projects() {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4 leading-tight py-2">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Each one represents a unique 
              challenge and learning experience in my journey as a developer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 