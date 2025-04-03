"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Interested in collaborating or have a project in mind? Feel free to reach out and connect with me on social
            media.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
                zezoelkafoury@gmail.com
              </a>
              <a
                href="https://github.com/Zezo-Elkafoury"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/ziad-elkafoury"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

