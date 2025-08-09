"use client";

import Image from "next/image";

export default function AboutMePage() {
  return (
    <section className="relative w-full py-20 bg-primary text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        
        {/* Imagen */}
        <div className="flex-1">
          <Image
            src="/me-programmer.png" // Asegúrate que esté en /public/about.jpg
            alt="Sobre mí"
            width={500}
            height={500}
            className="rounded-lg shadow-lg border-4 border-accent"
          />
        </div>

        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Quién soy
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            Soy un desarrollador Full Stack apasionado por crear soluciones 
            innovadoras y funcionales. Me encanta aprender nuevas tecnologías 
            y aplicarlas en proyectos que generen un impacto positivo.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Manejo tecnologías como JavaScript, TypeScript, React, Next.js, 
            Node.js y bases de datos SQL/NoSQL. Mi objetivo es crecer como 
            profesional y aportar valor a cada equipo con el que colabore.
          </p>
          <a
            href="/#projects"
            className="px-6 py-2 bg-secondary rounded-full text-white hover:bg-accent transition"
          >
            Ver mis proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
