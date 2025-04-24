"use client";
import { useEffect } from 'react';

export default function useScrollReveal() {
    useEffect(() => {
        async function initScrollReveal() {
            if (typeof window !== 'undefined') {
                const ScrollReveal = (await import('scrollreveal')).default;
                const sr = ScrollReveal({
                    distance: '60px',
                    duration: 2000,
                    reset: true,  // Esto ya está en true, lo cual es bueno
                    mobile: true,
                    useDelay: 'onload',
                    viewFactor: 0.2,
                    viewOffset: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                });

                // Limpiamos cualquier configuración previa
                sr.destroy();

                // Reinicializamos las animaciones
                sr.reveal('.reveal', {
                    delay: 200,
                    origin: 'bottom',
                    interval: 100,
                    easing: 'ease-out',
                    beforeReveal: (el) => {
                        el.style.visibility = 'visible';
                    }
                });

                return () => sr.destroy();
            }
        }

        initScrollReveal();
    }, []);  // El array vacío asegura que solo se ejecute al montar el componente
}
