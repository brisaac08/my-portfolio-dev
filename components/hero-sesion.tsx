"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20"
    >
      {/* Título centrado */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold mb-12 text-center
                  bg-gradient-to-r from-blue-400 via-secondary to-blue-500 
                  bg-clip-text text-transparent 
                  drop-shadow-[0_0_10px_rgba(255,165,0,0.7)]
                  animate-pulse tracking-wider"
      >
        BIENVENIDOS A MI MUNDO
      </motion.h1>

      {/* Contenido en dos columnas */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-12">
        {/* Columna Izquierda */}
        <div className="flex-1 flex flex-col items-center text-center z-10">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Image
              src="/me.jpg"
              alt="Foto de Brayan Caro"
              width={150}
              height={150}
              className="rounded-full border-4 justify-center items-center border-secondary shadow-lg"
            />
          </motion.div>

          {/* Nombre */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hola, soy <span className="text-secondary">Brayan Caro</span>
          </motion.h2>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-300 mt-4 max-w-md"
          >
            Ingeniero de Sistemas | Desarrollador Full Stack | Apasionado por el
            código y el aprendizaje continuo.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex gap-4 mt-6"
          >
            <a
              href="/Curriculum Brayan Caro.pdf"
              download
              className="px-6 py-2 bg-secondary text-white rounded-full hover:bg-secondary/80 transition"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>

        {/* Columna Derecha */}
        <div className="flex-1 flex justify-right items-right">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/welcome-to-my-world.png"
              alt="Astronauta programador"
              width={400}
              height={400}
              className="drop-shadow-lg justify-center items-center justify-right items-right"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
