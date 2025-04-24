"use client";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mt-[50px]">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Aviso de Privacidad
                </h1>

                {/* Introducción */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed">
                        La privacidad y la confidencialidad son pilares fundamentales en mi trabajo.
                        Toda la información que compartas en las sesiones será tratada de manera profesional
                        y bajo los estándares éticos de la psicología.
                    </p>
                </div>

                {/* Política de Privacidad */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Política de Privacidad
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            Los datos personales que compartas (nombre, correo electrónico, historial psicológico,
                            entre otros) se utilizan únicamente para fines relacionados con tu proceso terapéutico
                            y la gestión administrativa de las sesiones.
                        </li>
                        <li className="flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            Bajo ninguna circunstancia compartiré ni divulgaré tus datos sin tu consentimiento,
                            salvo en situaciones específicas requeridas por la ley.
                        </li>
                        <li className="flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            Todas las consultas se realizan a través de plataformas seguras, como Google Meet,
                            para garantizar la privacidad durante las videollamadas.
                        </li>
                    </ul>
                </div>

                {/* Confidencialidad */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Confidencialidad
                    </h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Lo que compartas durante las sesiones será manejado con estricta confidencialidad.
                        Sin embargo, existen excepciones legales:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-4">
                        <li className="flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            Si existe un riesgo inminente para tu vida o la de otra persona.
                        </li>
                        <li className="flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            Si hay indicios de un delito grave que deba ser denunciado.
                        </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        En estos casos, como profesional de la psicología, estoy obligada a actuar
                        siguiendo las normativas legales.
                    </p>
                </div>

                {/* Nota Final */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <p className="text-gray-700 leading-relaxed italic">
                        Si tienes alguna pregunta sobre cómo manejo tu información personal o sobre
                        la privacidad de las sesiones, no dudes en consultarme. Estoy aquí para
                        aclarar cualquier duda.
                    </p>
                </div>
            </div>
        </div>
    );
}
