'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="flex items-center justify-center">
              <Image
                src="/images/profile.jpg"
                alt="Noel Chacko profile photo"
                width={1429}
                height={1152}
                priority
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col items-center text-center"
          >
            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I&apos;m a tech lover and creative at heart. As an aspiring software engineer, 
                  I enjoy tackling tough problems and building cool stuff that makes a real impact.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When I&apos;m not coding, you&apos;ll probably find me with a camera in hand, 
                  capturing life&apos;s moments, or out exploring new places and chasing adventures. 
                  I love blending creativity with technical skills and always look for ways to 
                  bring both into my projects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m all about learning, growing, and taking on new challenges—whether 
                  it&apos;s in software, photography, or whatever comes next.
                </p>
              </CardContent>
            </Card>

            {/* Skills/Interests */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-border/50">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold mb-2">Software Development</h4>
                  <p className="text-sm text-muted-foreground">
                    React, Node.js, Python, TypeScript
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold mb-2">Photography</h4>
                  <p className="text-sm text-muted-foreground">
                    Sports, Portrait, Event Photography
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 