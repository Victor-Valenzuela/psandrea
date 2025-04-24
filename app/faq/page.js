"use client";
import { useState } from 'react';

const faqs = [
    {
        question: "¿Qué puedo esperar de las sesiones?",
        answer: "Las sesiones son un espacio seguro, privado y confidencial, donde te acompaño a explorar tus inquietudes y a desarrollar herramientas prácticas que te ayuden a enfrentar tus desafíos emocionales y sentirte mejor."
    },
    {
        question: "¿Cuánto duran las sesiones?",
        answer: "Cada sesión tiene una duración aproximada de 50 a 55 minutos."
    },
    {
        question: "¿Cuál es el costo de las sesiones?",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li>$30.000 CLP para quienes viven en Chile.</li>
                <li>30€ para residentes en Europa.</li>
                <li>Si prefieres pagar por PayPal, el costo es el equivalente a 30€, más 1€ adicional que corresponde a la comisión de la plataforma.</li>
            </ul>
        )
    },
    {
        question: "¿Cómo funciona la terapia online?",
        answer: (
            <>
                <p className="mb-2">Las sesiones se realizan por videollamada a través de Google Meet, una plataforma segura y fácil de usar. Solo necesitas:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Un computador, notebook o dispositivo móvil con cámara.</li>
                    <li>Una buena conexión a internet.</li>
                    <li>Un lugar tranquilo y privado donde puedas concentrarte y sentirte cómodo/a.</li>
                </ul>
            </>
        )
    },
    {
        question: "¿Qué métodos de pago aceptas?",
        answer: "Puedes pagar por transferencia bancaria o a través de PayPal. Una vez coordinada la sesión, te daré toda la información necesaria para realizar el pago."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto lg:px-8 mt-[50px]">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Preguntas Frecuentes (FAQ)
                </h1>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-medium text-gray-900">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`px-6 overflow-hidden transition-all duration-200 ${openIndex === index ? 'py-4' : 'max-h-0'
                                    }`}
                            >
                                <div className="text-gray-600 prose">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
