"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Send, Github, Linkedin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">06.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Ponte en contacto</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escucharte. Estoy siempre abierto a discutir nuevas
            oportunidades y colaboraciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info - Datos reales del CV */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:brayancarob.2003@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    brayancarob.2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Teléfono</h3>
                  <a href="tel:+573245704999" className="text-muted-foreground hover:text-primary transition-colors">
                    (324) 570 4999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Ubicación</h3>
                  <p className="text-muted-foreground">Calle 13c #21-80 La Popa, Colombia</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Sígueme en redes</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nombre
              </label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensaje
              </label>
              <Textarea
                id="message"
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="mr-2 h-5 w-5" />
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
