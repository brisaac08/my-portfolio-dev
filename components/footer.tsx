import { Github, Linkedin, Mail, Heart, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Diseñado y desarrollado con</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>por Brayan Caro</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="tel:+573245704999"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Teléfono"
            >
              <Phone size={20} />
            </a>
            <a
              href="mailto:brayancarob.2003@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">© {currentYear} Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
