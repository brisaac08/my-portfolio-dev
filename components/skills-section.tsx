"use client"

const skills = {
  languages: [
    { name: "C# / .NET", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 80 },
    { name: "C++", level: 70 },
    { name: "Dart", level: 75 },
  ],
  frameworks: [
    { name: "React", level: 85 },
    { name: "Flutter", level: 80 },
    { name: ".NET Framework", level: 88 },
    { name: "Node.js", level: 75 },
  ],
  databases: [
    { name: "SQL Server", level: 88 },
    { name: "PostgreSQL", level: 85 },
    { name: "MySQL", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "Oracle", level: 75 },
  ],
  tools: ["Git", "GitHub", "Docker", "SonarQube", "Postman", "JMeter"],
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Habilidades & Tecnologías</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Lenguajes */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Lenguajes
            </h3>
            <div className="space-y-4">
              {skills.languages.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Frameworks & Librerías
            </h3>
            <div className="space-y-4">
              {skills.frameworks.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bases de datos */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-chart-3 rounded-full" />
              Bases de Datos
            </h3>
            <div className="space-y-4">
              {skills.databases.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-chart-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">Herramientas & DevOps</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
