"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Brayan demostró un excelente compromiso y habilidades técnicas durante el desarrollo del sistema de inventarios. Su capacidad para resolver problemas y proponer soluciones fue fundamental para el éxito del proyecto.",
    author: "Anyela Patricia Maya Alvarino",
    role: "Contadora",
    company: "Central de Herramientas",
    contact: "contabilidad.cdh@hotmail.com",
  },
  {
    quote:
      "Como ingeniero de sistemas, puedo dar fe de las capacidades técnicas de Brayan. Su enfoque en la calidad del software y su disposición para aprender constantemente lo hacen un profesional valioso.",
    author: "Said José Calderón Salom",
    role: "Ingeniero de Sistemas",
    company: "Referencia Profesional",
    contact: "saidjoc@gmail.com",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Referencias Profesionales</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto" />
        </div>

        <div className="relative">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />

            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              {testimonials[current].quote}
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                {testimonials[current].author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonials[current].author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Referencia anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-muted"}`}
                  aria-label={`Ir a referencia ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Siguiente referencia"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
