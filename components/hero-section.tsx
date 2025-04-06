"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 animated-gradient" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Turning Data into
              <span className="gradient-text"> Actionable Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Data Analyst & Machine Learning Enthusiast passionate about uncovering meaningful patterns in data and
              building intelligent solutions.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 transition-colors duration-300 text-white"
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
            <div className="animate-float relative rounded-full bg-muted">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQG8VfNwxa-Tzg/profile-displayphoto-shrink_400_400/B4DZVKBs.6HkAg-/0/1740703717416?e=1749686400&v=beta&t=MbZNyHLcElKQ3yX7VRkNSFRP4wLFW2RfJ_Pfd2_HDY4"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-bounce"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  )
}

