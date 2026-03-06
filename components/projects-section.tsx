"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowRight, BarChart2, Code2, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const devProjects = [
  {
    title: "Ludebra Labs - Laboratorio Virtual",
    description:
      "Plataforma web de laboratorios virtuales de física, centrada en electromagnetismo. Ofrece simuladores interactivos para clases didácticas, apoyando a docentes y estudiantes en el aprendizaje significativo.",
    image: "/virtual-physics-laboratory-platform-with-electroma.jpg",
    tags: ["Web", "JavaScript", "Simuladores", "Educación"],
    github: "https://github.com/brisaac08/Laboratorio-Virtual",
    demo: "https://ludebralabs.vercel.app/",
    year: "2023-2024",
  },
  {
    title: "InvManagement - Sistema de Inventario",
    description:
      "Aplicativo de escritorio en C# con .NET Framework para la gestión de inventarios de Central de Herramientas, con planes de ampliar sus funcionalidades.",
    image: "/inventory-management-desktop-application-dark-them.jpg",
    tags: ["C#", ".NET Framework", "Desktop", "SQL Server"],
    github: "https://github.com/brisaac08/InvManagementRepo",
    demo: "#",
    year: "2023-2024",
  },
  {
    title: "Sistema de Modelos Financieros Educativo",
    description:
      "Aplicación web interactiva para la comprensión y aplicación práctica de modelos financieros: interés simple/compuesto, amortizaciones, gradientes y simuladores de crédito con tablas detalladas por periodo.",
    image: "/financial-models-educational-platform-laravel-dark.jpg",
    tags: ["Laravel 12", "Filament 4", "Livewire 3", "Tailwind 4", "MySQL"],
    github: "https://github.com/Aisaac123/EconomiaProject-Laravel-Jetstream",
    demo: "#",
    year: "2025",
  },
  {
    title: "Ecommerce para óptica en Valledupar - JD Fashion",
    description:
      "Plataforma ecommerce desarrollada para una óptica local, con catálogo dinámico de monturas, panel administrativo para gestión de inventario, subida de imágenes a Cloudinary y control de productos activos. Implementa arquitectura con Next.js App Router y API Routes para manejo seguro de autenticación.",
    image: "/jd-fashion.jpg",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Cloudinary", "Railway", "Postgres"],
    github: "https://github.com/brisaac08/front-jd-fashion",
    demo: "https://www.opticajdfashion.com",
    year: "2026",
  },
]

const dataProjects = [
  {
    title: "Dashboard COVID-19 - Análisis Parcial DB",
    description:
      "Dashboard interactivo en Power BI que analiza datos de la pandemia COVID-19, con visualizaciones de casos, tendencias temporales y distribución geográfica a partir de bases de datos oficiales.",
    tags: ["Power BI", "ETL", "COVID-19", "Data Analysis"],
    year: "2024",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiODQxMzEzYjAtMTY3Yi00YThkLWJmODItMTlkNDBlODVjMmRjIiwidCI6IjZjYTM0YWUxLTQ2NmYtNDRiYy1hN2FhLTBhYzVhNzhjNjFiMSIsImMiOjR9",
  },
]

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"dev" | "data">("dev")
  const [expandedEmbed, setExpandedEmbed] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Proyectos Destacados</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y pasión por crear soluciones digitales de
            calidad.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-2 p-1 bg-card border border-border rounded-xl">
            <button
              onClick={() => setActiveTab("dev")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "dev"
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code2 size={16} />
              Desarrollo de Software
            </button>
            <button
              onClick={() => setActiveTab("data")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "data"
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BarChart2 size={16} />
              Análisis de Datos y ETL
            </button>
          </div>
        </div>

        {/* Dev Projects Grid */}
        {activeTab === "dev" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Ver código en GitHub"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Ver demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {project.year}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Data Projects Grid */}
        {activeTab === "data" && (
          <div className="space-y-10">
            {dataProjects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border-b border-border">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <BarChart2 size={18} className="text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-mono rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-2xl">{project.description}</p>
                  </div>
                  <button
                    onClick={() => setExpandedEmbed(expandedEmbed === project.title ? null : project.title)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors shrink-0"
                    aria-label="Expandir dashboard"
                  >
                    <Maximize2 size={15} />
                    {expandedEmbed === project.title ? "Contraer" : "Expandir"}
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 px-6 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Embedded Power BI */}
                <div
                  className={`px-6 pb-6 pt-4 transition-all duration-300 ${
                    expandedEmbed === project.title ? "h-[600px]" : "h-72"
                  }`}
                >
                  <iframe
                    title={project.title}
                    src={project.embedUrl}
                    className="w-full h-full rounded-xl border border-border"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}

            {/* Note */}
            <p className="text-center text-xs text-muted-foreground">
              Los dashboards están embebidos directamente desde Power BI Service. Requiere permisos de acceso para su visualización completa.
            </p>
          </div>
        )}

        {/* GitHub CTA */}
        {activeTab === "dev" && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group bg-transparent" asChild>
              <a href="https://github.com/brisaac08" target="_blank" rel="noopener noreferrer">
                Ver más en GitHub
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {expandedEmbed && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-foreground font-semibold">{expandedEmbed}</h3>
            <button
              onClick={() => setExpandedEmbed(null)}
              className="p-2 rounded-lg hover:bg-card border border-border text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
          </div>
          <iframe
            title={expandedEmbed}
            src={
              dataProjects.find((p) => p.title === expandedEmbed)?.embedUrl ?? ""
            }
            className="w-full flex-1 rounded-xl border border-border"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </section>
  )
}
