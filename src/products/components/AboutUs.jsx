import React from 'react';
import { Header } from './Header';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="max-w-4x1 mx-auto my-8 p-4 bg-white shadow-xl rounded-md">
        <img src="./src/images/Nosotros1.png" alt="Nosotros" className="w-full h-auto md:h-120 rounded-md" style={{ maxHeight: '500px'}} />
        <div className="container mx-auto my-8">
          <div className="grid grid-cols-1 gap-8">
           
            <div className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col lg:flex-row">
              <img src="./src/images/Nosotros2.png" alt="Imagen 1" className="w-full lg:w-1/2 h-auto lg:h-full" />
              <div className="p-4 w-full lg:w-1/2">
                <h2 className="text-4xl font-semibold mb-5 pb-5">Calidad, confianza y prestigio en tus actividades físicas.</h2>
                <p className="text-lg text-gray-600">
                En SportStyle, contamos con una extensa experiencia en el mercado salvadoreño, siendo líderes en la fabricación de los más destacados uniformes deportivos. Nuestro equipo está comprometido en ofrecer productos de primera calidad que superen las expectativas de nuestros clientes.
                </p>
                <br />
                <p className="text-lg text-gray-600">
                Además, comercializamos marcas internacionales tanto al detalle como al por mayor, contando con una fuerza de ventas capaz de proporcionar soluciones deportivas a nuestros clientes. Hemos vestido y ofrecido tus marcas favoritas en nuestras sucursales y ahora también las llevamos hasta la puerta de tu casa.
                </p>
              </div>
            </div>

            
            <div className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col lg:flex-row">
              <div className="p-4 w-full lg:w-1/2">
                <h2 className="text-4xl font-semibold mb-5 pb-5 text-center">Misión</h2>
                <div className="flex items-center justify-center h-48">
                  <p className="text-lg text-gray-600">
                     Proveer soluciones deportivas que faciliten el desarrollo de las actividades de nuestros clientes y satisfagan sus necesidades, mediante la innovación.
                  </p>
                </div>
              </div>
              <img src="./src/images/Nosotros3.png" alt="Imagen 2" className="w-full lg:w-1/2 h-auto lg:h-full" />
            </div>

    
            <div className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col lg:flex-row">
              <img src="./src/images/Nosotros4.png" alt="Imagen 3" className="w-full lg:w-1/2 h-auto lg:h-full" />
              <div className="p-4 w-full lg:w-1/2">
                <h2 className="text-4xl font-semibold mb-5 pb-5 text-center">Visión</h2>
                <div className="flex items-center justify-center h-48">
                  <p className="text-lg text-gray-600">
                    Priorizar la innovación en la confección y distribución de marcas de prestigio, que excedan las expectativas del cliente.
                  </p>
                </div>
                <br />
              </div>
            </div>

            
            <div className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col lg:flex-row">
              <div className="p-4 w-full lg:w-1/2">
                <h2 className="text-4xl font-semibold mb-5 pb-5 text-center">Valores</h2>
                <div className="flex flex-col items-center justify-center h-48">
                  <p className="mb-2">* Honestidad</p>
                  <p className="mb-2">* Compromiso</p>
                  <p className="mb-2">* Respeto</p>
                  <p className="mb-2">* Trabajo en equipo</p>
                </div>
              </div>
              <img src="./src/images/Nosotros5.png" alt="Imagen 4" className="w-full lg:w-1/2 h-auto lg:h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
