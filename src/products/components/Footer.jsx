import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Sobre Nosotros</h3>
            <p className="text-sm mx-4"> 
              SportStyle es líder en la fabricación de uniformes deportivos de
              calidad. Nuestro compromiso es ofrecer productos excepcionales que
              satisfagan las necesidades de nuestros clientes.comercializamos marcas internacionales tanto al detalle como al por mayor, contando con una fuerza de ventas capaz de proporcionar soluciones deportivas a nuestros clientes. 
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Contáctanos</h3>
            <p className="text-sm mx-4"> 
              Dirección: Av. Principal 123, Ciudad Deportiva, El Salvador
            </p>
            <p className="text-sm mx-4"> 
              Teléfono: +503 7234-5678
            </p>
            <p className="text-sm mx-4"> 
              Email: info@sportstyle.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Valores</h3>
            <div className="flex space-x-4">
              <ul className="list-disc pl-4 mx-4">
                <li>Honestidad</li>
                <li>Compromiso</li>
                <li>Respeto</li>
                <li>Trabajo en equipo</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-center text-sm">
          © 2024 SportStyle. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
