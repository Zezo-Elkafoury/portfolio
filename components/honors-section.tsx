"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Star, Trophy } from "lucide-react"

const honors = [
  {
    icon: Trophy,
    title: "Nasa Space Apps Global Nominee",
    organization: "Nasa",
    date: "2024",
    description: "Selected as a NASA Space Apps Global Nominee among 70+ teams for developing an Exoplanet Learning Platform. The platform featured an interactive learning experience with a planet search engine and a habitability score, enhancing user engagement with exoplanetary data.",
  },
  
  {
    icon: Award,
    title: "ISEF National Finalist",
    organization: "Regeneron Isef",
    date: "2025",
    description: "I was selected as a National Finalist in ISEF, ranking 1st in the Software Category in my governorate after successfully passing three qualification phases. My research focused on developing an AI-powered assistant designed to enhance accessibility for individuals with disabilities.",
  },

  {
    icon: Star,
    title: "Accepted into Civic Innovators Fellowship",
    organization: "Civics Unplugged",
    date: "2025",
    description: "I have been accepted into the fellowship from a competitive pool is of an acceptance rate 13%. This opportunity allowed me to engage in thought-provoking discussions on AI in education, democracy, civic innovation, and leadership.",
  }
]

export function HonorsSection() {
  return (
    <section id="honors" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="gradient-text">Honors & Awards</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Recognition and achievements in data science, machine learning, and research excellence.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {honors.map((honor, index) => (
            <motion.div
              key={honor.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                    <honor.icon className="h-12 w-12 text-primary transition-colors duration-300" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold">{honor.title}</h3>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-primary">{honor.organization}</p>
                      <p>{honor.date}</p>
                    </div>
                    <p className="text-muted-foreground">{honor.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

