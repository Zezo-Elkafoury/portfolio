"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const technicalSkills = [
  { name: "Python", level: 90 },
  { name: "Pandas", level: 85 },
  { name: "Scikit-learn", level: 80 },
  { name: "TensorFlow", level: 75 },
  { name: "SQL", level: 85 },
  { name: "Power BI", level: 80 },
]

const softSkills = [
  { name: "Problem Solving", level: 90 },
  { name: "Communication", level: 85 },
  { name: "Team Collaboration", level: 90 },
  { name: "Project Management", level: 80 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 animated-gradient opacity-20" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            A comprehensive overview of my technical and soft skills, developed through years of experience in data
            analysis and machine learning.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>Programming languages and tools I work with</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-secondary/10 via-transparent to-transparent" />
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
                <CardDescription>Professional attributes and interpersonal abilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-secondary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

