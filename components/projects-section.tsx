"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Saudi Arabia Real Estate EDA",
    description:
      "This project analyzes the Saudi Arabia Real Estate (AQAR) dataset, which provides information on rental houses in four major cities: Riyadh, Jeddah, Dammam, and Al-Khobar. The goal is to explore the relationship between house features and rental prices to understand the key factors influencing the real estate market in these cities.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Matplotlib","Data Insights", "Pandas"],
    github: "https://github.com/Zezo-Elkafoury/Saudi-Arabia-House-Prices-Full-EDA",
    demo: "#"
  },
  {
    title: "Fake News Detection System",
    description: "A machine learning-powered system that detects fake and real news articles with 97% accuracy using NLP techniques, TF-IDF vectorization, and Logistic Regression.",
    image: "https://plus.unsplash.com/premium_photo-1707774568376-b146c6bf79f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Scikit-learn", "ML", "Data Preproscesing"],
    github: "https://github.com/Zezo-Elkafoury/Fake-News-Detection",
    demo: "#",
  },
  {
    title: "Exoplore",
    description: "An educational platform exploring exoplanets with interactive games and visualizations",
    image: "https://images.unsplash.com/photo-1711560217845-2333455669a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Fast API", "Pandas", "React"],
    github: "https://github.com/Zezo-Elkafoury/Exoplore-Exo-planet-learning-platform-",
    demo: "https://nasa-project-eosin.vercel.app/",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            A selection of my data analysis and machine learning projects, showcasing my technical skills and
            problem-solving abilities.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                 
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

