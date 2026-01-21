import { Code2, Database, TestTube } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary font-mono text-sm">01.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Sobre mí</h2>
              <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy <span className="text-primary">estudiante de Ingeniería de Sistemas</span> en la Universidad Popular
                del Cesar, apasionado por el desarrollo de software y la creación de soluciones que marquen la
                diferencia.
              </p>
              <p>
                Me especializo en el desarrollo de aplicaciones utilizando tecnologías como{" "}
                <span className="text-primary">C# con .NET</span>, <span className="text-primary">JavaScript</span>,{" "}
                <span className="text-primary">React</span>, <span className="text-primary">Python</span> y{" "}
                <span className="text-primary">Flutter</span>. Creo firmemente en escribir código limpio, mantenible y
                de calidad mediante buenas prácticas.
              </p>
              <p>
                Mi enfoque se centra en el aprendizaje continuo y la actualización constante, utilizando herramientas de
                prueba como <span className="text-primary">SonarQube</span>,{" "}
                <span className="text-primary">Postman</span> y <span className="text-primary">JMeter</span> para
                garantizar la calidad del software.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: Code2,
                title: "Desarrollo Full Stack",
                description: "Soluciones web, móviles y de escritorio con C#, .NET, React y Flutter.",
              },
              {
                icon: Database,
                title: "Bases de Datos",
                description: "Experiencia con SQL Server, PostgreSQL, MySQL, Oracle y MongoDB.",
              },
              {
                icon: TestTube,
                title: "Calidad de Software",
                description: "Testing y buenas prácticas con SonarQube, Postman, JMeter y Docker.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
