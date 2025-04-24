"use client";
import Image from 'next/image';
import Navbar from './Navbar';
import WhatsAppButton from './button';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import AboutSlider from './slider';
import { motion } from 'framer-motion';
import ImageSlider from './imageSlider';
import useScrollReveal from './useScrollReveal';
import Link from 'next/link';



export default function Home() {
  useScrollReveal();
  const [showWhatsApp, setShowWhatsApp] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      // Calcula el porcentaje de scroll
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Muestra el botón solo cuando el scroll es mayor al 20% y no está en el bottom
      setShowWhatsApp(scrollPercentage > 20 && !bottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamada inicial para establecer el estado correcto
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6 flex flex-col items-center justify-center" style={{ padding: '0px' }}>
        <section id="start" className="reveal invisible min-h-screen w-full bg-blue-200">
          <div className="container mx-auto min-h-screen relative">
            {/* Grid container */}
            <div className="grid md:grid-cols-2 min-h-screen">
              {/* Columna de texto - ocupará todo el ancho en móvil y la mitad en desktop */}
              <div className="relative z-10 p-6 pt-20 md:items-center md:justify-center flex flex-col h-full">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold text-gray-800">Bienvenida a mi consultorio</h1>

                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      ¡Hola! Soy Andrea Marcus, psicóloga con 8 años de experiencia en el acompañamiento
                      emocional de adultos. Mi objetivo es ayudarte a mejorar tu bienestar y avanzar
                      en tu crecimiento personal. Trabajo desde la Terapia Cognitivo-Conductual (TCC),
                      una metodología práctica y respaldada por la evidencia científica para abordar
                      temas como la ansiedad, el estrés, las crisis de pánico, los procesos de
                      migración y la terapia sexual.
                    </p>

                    <p className="leading-relaxed">
                      Mi consulta es completamente online, lo que facilita encontrar un horario que
                      funcione para ti sin importar donde te encuentres. Así, te puedo ofrecer un
                      acompañamiento cercano y profesional desde la comodidad de tu hogar.
                    </p>

                    <p className="leading-relaxed">
                      Mi propósito es brindarte un espacio seguro y acogedor para que puedas explorar
                      tus emociones, superar desafíos y desarrollar herramientas que te permitan
                      vivir de una manera más equilibrada.
                    </p>

                    <p className="leading-relaxed font-medium">
                      ¿Te gustaría dar el primer paso? Haz clic en "Agenda tu sesión" y comencemos
                      este camino juntos.
                    </p>
                    {/* Botón de acción */}
                    <button onClick={() => window.open('https://wa.me/+4917687121255', '_blank')} className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg
          hover:bg-purple-700 transition-colors duration-300 shadow-lg">
                      Agenda tu sesión
                    </button>
                  </div>

                </div>
              </div>

              {/* Columna de imagen */}
              <div className="absolute bottom-0 right-0 w-4/6 md:w-1/2 h-3/6 md:h-full">
                <Image
                  src="./images/Inicio2.png"
                  alt="Fondo"
                  fill
                  className="object-cover object-[-20%_center] md:object-center drop-shadow-[0_0_10px_rgba(0,0,0,1)]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>




        <section id="about" className="reveal invisible h-screen w-full bg-purple-200">
          <div className="container mx-auto h-full">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 h-full relative">
              {/* Slider de Imágenes */}
              <div className="relative h-2/6 md:absolute md:bottom-0 md:left-0 md:w-2/3 md:h-full">
                <ImageSlider currentIndex={currentImageIndex} />
              </div>

              {/* Slider de Texto */}
              <div style={{ height: '500px' }} className="flex items-center justify-center p-4 h-full md:col-start-2">
                <AboutSlider loop={true} onSlideChange={(index) => setCurrentImageIndex(index)} />
              </div>
            </div>
          </div>
        </section>








        <section id="services" className="reveal invisible w-full bg-green-200 py-8 md:py-16 min-h-fit">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Servicios</h2>

            {/* Grid principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Terapia Individual */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <lord-icon
                    src="https://cdn.lordicon.com/kdduutaw.json"
                    trigger="hover"
                    style={{ width: '100px', height: '100px' }}>
                  </lord-icon>
                  <h3 className="text-xl font-semibold mt-4 mb-3">Terapia Individual para Adultos</h3>
                  <p className="text-gray-600 text-center">
                    Te ofrezco un espacio confidencial y seguro donde podemos trabajar juntos aspectos como la ansiedad,
                    las crisis de pánico, la adaptación migratoria y temas relacionados con la sexualidad. El objetivo
                    es proporcionarte herramientas prácticas para afrontar estos desafíos con mayor bienestar.
                  </p>
                </div>
              </div>

              {/* Terapia Sexual */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <lord-icon
                    src="https://cdn.lordicon.com/ncmnezgk.json"
                    trigger="hover"
                    style={{ width: '100px', height: '100px' }}>
                  </lord-icon>
                  <h3 className="text-xl font-semibold mt-4 mb-3">Terapia Sexual</h3>
                  <p className="text-gray-600 text-center">
                    Si estás pasando por dificultades relacionadas con la sexualidad, como falta de deseo,
                    problemas de comunicación en pareja o temas sobre tu bienestar íntimo, este espacio está
                    diseñado para abordarlo de manera abierta y profesional.
                  </p>
                </div>
              </div>

              {/* Modalidad Online */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-[100px] h-[100px] relative" // Mismo tamaño que tenías con lordicon
                  >
                    <Image
                      src="./images/meet.gif" // Ajusta esta ruta al nombre de tu archivo
                      alt="Ansiedad y Crisis de Pánico"
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold mt-4 mb-3">Modalidad Online</h3>
                  <p className="text-gray-600 text-center">
                    Todo el trabajo terapéutico lo realizo en línea, lo cual permite mayor flexibilidad para
                    adaptarnos a tu horario y situación. Así podemos encontrar el mejor momento para las
                    sesiones, sin importar donde vivas.
                  </p>
                </div>
              </div>

              {/* Ansiedad y Crisis de Pánico */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-[100px] h-[100px] relative" // Mismo tamaño que tenías con lordicon
                  >
                    <Image
                      src="./images/brain.gif" // Ajusta esta ruta al nombre de tu archivo
                      alt="Ansiedad y Crisis de Pánico"
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold mt-4 mb-3">Ansiedad y Crisis de Pánico</h3>
                  <p className="text-gray-600 text-center">
                    Si la ansiedad está tomando demasiado espacio en tu vida, quiero acompañarte a recuperar
                    el equilibrio. Trabajamos juntos/as para identificar y manejar esos síntomas que pueden
                    sentirse tan abrumadores, buscando estrategias que realmente funcionen para ti.
                  </p>
                </div>
              </div>

              {/* Procesos de Migración */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-[100px] h-[100px] relative" // Mismo tamaño que tenías con lordicon
                  >
                    <Image
                      src="./images/travel.gif" // Ajusta esta ruta al nombre de tu archivo
                      alt="Ansiedad y Crisis de Pánico"
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold mt-4 mb-3">Procesos de Migración</h3>
                  <p className="text-gray-600 text-center">
                    Como alguien que también ha migrado, entiendo lo complejo que puede ser adaptarse a un nuevo
                    lugar. Mi intención es brindarte un espacio donde explorar lo que estás viviendo y ayudarte
                    a encontrar herramientas que te den confianza y calma en esta etapa de cambio.
                  </p>
                </div>
              </div>

              {/* Terapia Sexual (Detallada) */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-[200px] h-[100px] relative" // Mismo tamaño que tenías con lordicon
                  >
                    <Image
                      src="./images/sexual2.gif" // Ajusta esta ruta al nombre de tu archivo
                      alt="Ansiedad y Crisis de Pánico"
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold mt-4 mb-3">Terapia Sexual</h3>
                  <p className="text-gray-600 text-center">
                    Hablar de sexualidad puede ser un desafío, pero aquí encontrarás un lugar seguro,
                    respetuoso y libre de juicios. Ya sea que te enfrentes a temas como el deseo, la
                    comunicación en pareja o el bienestar sexual, estoy aquí para apoyarte.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section id="download" className="reveal invisible h-screen w-full bg-yellow-200 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Descargas</h1>
        </section>

        <section id="contact" className="reveal invisible h-screen w-full bg-red-200 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Contacto</h1>
        </section>

      </main>
      <footer className="bg-gray-800 text-white py-1">
        <div className="container mx-auto flex flex-col items-center space-y-3">
          <h3 className="text-xl font-semibold">Mis redes</h3>
          <div className="flex gap-4 md:gap-6">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors">
              <FaInstagram className="text-3xl md:text-5xl" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors">
              <FaLinkedin className="text-3xl md:text-5xl" />
            </Link>
            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors">
              <FaWhatsapp className="text-3xl md:text-5xl" />
            </Link>
          </div>
          <div className="text-sm">
            © 2024 Psicóloga - Todos los derechos reservados.
          </div>
        </div>
      </footer>
      {showWhatsApp && <WhatsAppButton />}
    </div >
  );
}
