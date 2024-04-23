import React from 'react';
import { Header } from './Header';
import Footer from './Footer';

export const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="bg-white  rounded-md">
        <img src="https://utfs.io/f/e70f4741-23e3-4dd5-844e-cd531d8909f4-i2351q.png" alt="Nosotros" className="w-full h-auto md:h-120 rounded-md" style={{ maxHeight: '800px'}} />
        
        <div className="container mx-auto my-2 mt-2 max-w-6xl">
        <br /><hr /><br />
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col lg:flex-row items-center justify-center">
              <img src="https://utfs.io/f/b3f9ed9d-0b45-458f-ab81-6b7c25b84978-i2351p.png" alt="funciona" className="w-full lg:w-1/2 h-auto lg:h-full" />
              <div className="p-4 w-full lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-5">Calidad, confianza y prestigio en tus actividades físicas.</h2>
                <p className="text-base lg:text-lg text-gray-600">
                  En SportStyle, contamos con una extensa experiencia en el mercado salvadoreño, siendo líderes en la fabricación de los más destacados uniformes deportivos. Nuestro equipo está comprometido en ofrecer productos de primera calidad que superen las expectativas de nuestros clientes.
                </p>
                <br />
                <p className="text-base lg:text-lg text-gray-600">
                  Además, comercializamos marcas internacionales tanto al detalle como al por mayor, contando con una fuerza de ventas capaz de proporcionar soluciones deportivas a nuestros clientes. Hemos vestido y ofrecido tus marcas favoritas en nuestras sucursales y ahora también las llevamos hasta la puerta de tu casa.
                </p>
              </div>
            </div>

            
            <div className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col lg:flex-row items-center justify-center">
              <div className="p-4 w-full lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-center">Misión</h2>
                <div className="flex items-center justify-center h-48">
                  <p className="text-base lg:text-lg text-gray-600">
                     Proveer soluciones deportivas que faciliten el desarrollo de las actividades de nuestros clientes y satisfagan sus necesidades, mediante la innovación.
                  </p>
                </div>
              </div>
              <img src="https://utfs.io/f/474f07bf-7692-42e4-bb4f-b08d5169b1bb-i2351o.png" alt="Imagen 2" className="w-full lg:w-1/2 h-auto lg:h-full" />
            </div>

    
            <div className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col lg:flex-row items-center justify-center">
              <img src="https://utfs.io/f/64b0b2b8-7dae-409a-82f7-d67488342185-i2351n.png" alt="Imagen 3" className="w-full lg:w-1/2 h-auto lg:h-full" />
              <div className="p-4 w-full lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-center">Visión</h2>
                <div className="flex items-center justify-center h-48">
                  <p className="text-base lg:text-lg text-gray-600">
                    Priorizar la innovación en la confección y distribución de marcas de prestigio, que excedan las expectativas del cliente.
                  </p>
                </div>
                <br />
              </div>
            </div>

            
            <div className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col lg:flex-row items-center justify-center">
              <div className="p-4 w-full lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-center">Valores</h2>
                <div className="flex flex-col items-center justify-center h-48">
                  <p className="text-base lg:text-lg mb-2">* Honestidad</p>
                  <p className="text-base lg:text-lg mb-2">* Compromiso</p>
                  <p className="text-base lg:text-lg mb-2">* Respeto</p>
                  <p className="text-base lg:text-lg mb-2">* Trabajo en equipo</p>
                </div>
              </div>
              <img src="https://utfs.io/f/854bca9e-d1a4-4d3a-8385-5ff678d4964d-i2351m.png" alt="Imagen 4" className="w-full lg:w-1/2 h-auto lg:h-full" />
            </div>
          </div>
        </div>
      </div>
      <br /><hr /><br />
      <Footer />
    </div>
  );
};
