"use client"

import { Github, Linkedin, Mail, ArrowDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider">¡Hola! Mi nombre es</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
                Brayan Isaac Caro Bolaño
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Full Stack Developer | Backend Developer C# .NET
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Desarrollador de software orientado a la creación de soluciones web, móviles y de escritorio. Me
              caracterizo por el aprendizaje continuo, la actualización constante y el enfoque en la calidad del
              software mediante buenas prácticas y herramientas de prueba.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contáctame
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary bg-transparent" asChild>
                <a href="#experience">Ver Experiencia</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:brayancarob.2003@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+573245704999"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Teléfono"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Animated code block */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl" />
              <div className="relative bg-card border border-border rounded-2xl p-6 font-mono text-sm overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-accent/70" />
                  <div className="w-3 h-3 rounded-full bg-primary/70" />
                </div>
                <pre className="text-muted-foreground">
                  <code>
                    {`const developer = {
  name: "Brayan Caro",
  role: "Full Stack Developer",
  skills: [
    "C#", ".NET", "React",
    "JavaScript", "Python", "Flutter"
  ],
  databases: [
    "SQL Server", "PostgreSQL", "MongoDB"
  ],
  passion: "Crear soluciones de calidad",
  available: true
};

export default developer;`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  )
}
