import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Ludebra Labs - Laboratorio Virtual",
    description:
      "Plataforma web de laboratorios virtuales de física, centrada en electromagnetismo. Ofrece simuladores interactivos para clases didácticas, apoyando a docentes y estudiantes en el aprendizaje significativo.",
    image: "/virtual-physics-laboratory-platform-with-electroma.jpg",
    tags: ["Web", "JavaScript", "Simuladores", "Educación"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    year: "2023-2024",
  },
  {
    title: "InvManagement - Sistema de Inventario",
    description:
      "Aplicativo de escritorio en C# con .NET Framework para la gestión de inventarios de Central de Herramientas, con planes de ampliar sus funcionalidades.",
    image: "/inventory-management-desktop-application-dark-them.jpg",
    tags: ["C#", ".NET Framework", "Desktop", "SQL Server"],
    github: "https://github.com",
    demo: "#",
    featured: true,
    year: "2023-2024",
  },
  {
    title: "Sistema de Mortalidad Académica UPC",
    description:
      "Aplicativo web para conocer y analizar la tasa de mortalidad de la carrera Ingeniería de Sistemas en la Universidad Popular del Cesar.",
    image: "/academic-analytics-dashboard-university-data-visua.jpg",
    tags: ["Web", "Analytics", "Universidad", "Base de Datos"],
    github: "https://github.com",
    demo: "#",
    featured: true,
    year: "2024",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Proyectos Destacados</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y pasión por crear soluciones digitales de
            calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
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

              {/* Project Info */}
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

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group bg-transparent" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              Ver más en GitHub
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
