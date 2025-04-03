"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, LineChart, MessageSquare } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container px-4 space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            I'm a data analyst and machine learning enthusiast with a passion for transforming complex data into
            actionable insights. With expertise in Python, data visualization, and machine learning, I help
            organizations make data-driven decisions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Brain,
              title: "Machine Learning",
              description:
                "Experienced in developing and deploying machine learning models for real-world applications.",
            },
            {
              icon: LineChart,
              title: "Data Analysis",
              description: "Skilled in extracting meaningful insights from complex datasets using statistical methods.",
            },
            {
              icon: MessageSquare,
              title: "Communication",
              description: "Effective at communicating technical concepts to non-technical stakeholders.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                    <item.icon className="h-12 w-12 text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-center text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

