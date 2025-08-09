"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <Image
          src="/me.jpg"
          alt="Foto de Brayan Caro"
          width={150}
          height={150}
          className="rounded-full border-4 border-secondary shadow-lg"
        />
      </motion.div>

      {/* Nombre */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mt-6 z-10"
      >
        Hola, soy <span className="text-secondary">Brayan Caro</span>
      </motion.h1>

      {/* Rol */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-lg text-gray-300 mt-4 max-w-xl z-10"
      >
        Ingeniero de Sistemas | Desarrollador Full Stack | Apasionado por el código y el aprendizaje
        continuo.
      </motion.p>

      {/* Botones */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="flex gap-4 mt-6 z-10"
      >
        <a
          href="/cv.pdf"
          download
          className="px-6 py-2 bg-secondary text-white rounded-full hover:bg-secondary/80 transition"
        >
          Descargar CV
        </a>
        <a
          href="#projects"
          className="px-6 py-2 border border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white transition"
        >
          Ver proyectos
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
