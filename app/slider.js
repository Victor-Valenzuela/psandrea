import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AboutSlider = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev();
    }, [swiperRef]);

    const handleNext = useCallback(() => {
        swiperRef?.slideNext();
    }, [swiperRef]);

    const slides = [
        {
            title: "Sobre mí",
            content: (
                <div className="space-y-4">
                    <p>
                        Tengo 32 años y vivo en Alemania, pero trabajo online con personas de diversos países.
                        Me formé como psicóloga en la Universidad de Viña del Mar, en Chile, y tengo dos diplomados en terapia sexual:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Consejería Sexual (Escuela Transdisciplinaria de Sexualidad, ETSEX)</li>
                        <li>Sexualidad y Terapia Sexual (Academia de Psicología y Bienestar)</li>
                    </ul>
                    <p>
                        Durante 6 años trabajé en Chile en diversas áreas de la psicología lo que me ayudó
                        a adquirir una visión amplia y adaptable sobre cómo abordar las necesidades de cada consultante.
                    </p>
                </div>
            )
        },
        {
            title: "Mi Enfoque Terapéutico",
            content: (
                <div className="space-y-4">
                    <p>
                        Trabajo principalmente desde la Terapia Cognitivo-Conductual (TCC), un enfoque práctico y
                        basado en evidencia. Mis principales áreas de trabajo son:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Ansiedad, crisis de pánico y estrés</li>
                        <li>Migración y procesos de adaptación</li>
                        <li>Sexualidad y terapia sexual</li>
                    </ul>
                    <p>
                        Gracias al trabajo online, puedo ofrecer una atención flexible y accesible,
                        que se ajusta a tu ritmo de vida y te permite tener sesiones cómodas sin importar donde estés.
                    </p>
                </div>
            )
        },
        {
            title: "Un Poco Más de Mí",
            content: (
                <div className="space-y-4">
                    <p>
                        Aparte de la psicología, disfruto de la lectura, especialmente de ciencia ficción,
                        fantasía y sagas de novelas. También me gusta pintar, hacer ejercicio y disfrutar
                        de mi tiempo en casa, recargando energías.
                    </p>
                    <p>
                        Mi objetivo es acompañarte de forma cercana para que podamos encontrar herramientas
                        que te ayuden a vivir de manera más plena.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="relative w-full h-full">
            <button
                onClick={handlePrevious}
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
                aria-label="Anterior"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{
                    type: 'bullets',
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSwiper={setSwiperRef}
                className="h-full text-slider"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-6 md:p-8 h-full flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                                {slide.title}
                            </h2>
                            <div className="prose prose-sm md:prose-base text-gray-700 max-w-none">
                                {slide.content}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                onClick={handleNext}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
                aria-label="Siguiente"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
};

export default AboutSlider;