import { GraduationCap, Award } from "lucide-react"

const education = {
  degree: "Ingeniería de Sistemas",
  institution: "Universidad Popular del Cesar",
  status: "Estudiante activo",
}

const courses = [
  {
    name: "Curso Avanzado de Backend con Node.js",
    platform: "Platzi",
  },
  {
    name: "Curso de Frontend",
    platform: "Platzi",
  },
  {
    name: "Curso de Git y GitHub",
    platform: "Platzi",
  },
  {
    name: "Introducción a Redes",
    platform: "CISCO Networking Academy",
  },
  {
    name: "FrontEnd, Git, GitHub y Desarrollo Personal",
    platform: "Alura Latam & Oracle One",
  },
]

const experiences = [
  {
    period: "2023 — 2024",
    role: "Desarrollador Full Stack",
    company: "Ludebra Labs",
    description:
      "Plataforma web de laboratorios virtuales de física, centrada en electromagnetismo. Desarrollé simuladores interactivos para clases didácticas.",
    technologies: ["JavaScript", "Web", "Simuladores", "Educación"],
  },
  {
    period: "2023 — 2024",
    role: "Desarrollador de Software",
    company: "Central de Herramientas",
    description:
      "Desarrollé InvManagement, un aplicativo de escritorio en C# con .NET Framework para la gestión de inventarios.",
    technologies: ["C#", ".NET Framework", "SQL Server", "Desktop"],
  },
  {
    period: "2024",
    role: "Colaborador de Proyecto",
    company: "Universidad Popular del Cesar",
    description:
      "Colaboré con la construcción y desarrollo de un aplicativo web para analizar la tasa de mortalidad de la carrera Ingeniería de Sistemas.",
    technologies: ["Web", "Analytics", "Base de Datos"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Experiencia & Formación</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experiencia Laboral */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Experiencia en Proyectos
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />

                    <div className="p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                      <span className="text-sm text-primary font-mono">{exp.period}</span>
                      <h4 className="text-lg font-semibold text-foreground mt-1">{exp.role}</h4>
                      <p className="text-accent text-sm">{exp.company}</p>
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formación y Cursos */}
          <div className="space-y-8">
            {/* Educación */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Formación Académica
              </h3>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h4 className="text-lg font-semibold text-foreground">{education.degree}</h4>
                <p className="text-accent">{education.institution}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {education.status}
                </span>
              </div>
            </div>

            {/* Cursos */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Certificaciones & Cursos
              </h3>
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <p className="font-medium text-foreground text-sm">{course.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{course.platform}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Idiomas</h3>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Español - Nativo
                </span>
                <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Inglés - A2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
