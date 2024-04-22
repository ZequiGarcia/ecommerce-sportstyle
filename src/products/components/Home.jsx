import React, { useRef } from "react";
import { Header } from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsData from "../../mocks/product.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Home = () => {
  // Accede al array de productos usando productsData.productos
  const products = productsData.productos;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Datos de marcas quemados
  const brands = [
    {
      id: 1,
      name: "Soccer",
      image:
        "https://th.bing.com/th/id/R.538026aa95a382a32219577188a78701?rik=uYRuYyk%2bgRGBfw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26600000%2fsoccer-soccer-26649442-2560-1600.jpg&ehk=eVp%2b4oF4IgUdG4jgZhik720wyWc4mP9GG2YZ6o4Jtzg%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "Tenis",
      image:
        "https://www.debate.com.mx/__export/1515175254223/sites/debate/img/2018/01/05/ejercicios-de-coordinacion-tenis.jpg_172596871.jpg",
    },
    {
      id: 3,
      name: "Basketball",
      image: "https://live.staticflickr.com/8780/17685731631_849f9ca63e_b.jpg",
    },
    {
      id: 4,
      name: "Golf",
      image:
        "https://th.bing.com/th/id/R.38a7eb903433fd1a438878e448fb6be9?rik=FxSU%2fkWDOFKo2g&pid=ImgRaw&r=0",
    },
    {
      id: 5,
      name: "Swimming",
      image:
        "https://th.bing.com/th/id/OIP.fECa6YnacFY72OWlNpVA1AHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 6,
      name: "Cycling",
      image:
        "https://media1.popsugar-assets.com/files/thumbor/X0uo9sdj00NRiVT8vPI1lkNyBiQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/09/24/880/n/1922729/tmp_Gism1v_bf53cf342c694b31_GettyImages-1026393254.jpg",
    },
    {
      id: 7,
      name: "Athletics",
      image:
        "https://th.bing.com/th/id/OIP.3oDPP9n3lrkP-io4u3b8yAHaE1?rs=1&pid=ImgDetMain",
    },
    {
      id: 8,
      name: "Climbing",
      image:
        "https://th.bing.com/th/id/R.7cbeec75b3015d3387995b775a070b29?rik=bNCzz344TOctxA&pid=ImgRaw&r=0",
    },
  ];

  // Referencia al Slider
  const sliderRef = useRef();

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-light-100">
            <div className="max-w-2xl mx-auto text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¡Bienvenido a SportStyle!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                En SportStyle, nuestra dedicación y experiencia en el mercado
                salvadoreño nos han convertido en líderes indiscutibles en la
                fabricación de los más destacados uniformes deportivos.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nuestro compromiso es ofrecer productos de primera calidad que
                superen las expectativas de nuestros clientes, garantizando
                excelencia en cada detalle.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Descubre una amplia gama de productos de alta calidad, desde los
                más destacados uniformes deportivos hasta las marcas
                internacionales más reconocidas. Explora nuestras secciones y
                déjate inspirar por la pasión y el compromiso que nos distinguen
                en el mercado salvadoreño.
              </p>
              <p className="text-lg text-gray-700 text-center">
                ¡Es hora de comenzar tu viaje con SportStyle!
              </p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <Slider {...settings}>
              {/* Renderiza las imágenes de los productos desde el archivo JSON */}
              {products.map((product) => (
                <div key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "360px",
                      height: "300px",
                      margin: "0 auto",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </section>
        </div>

        {/* Carrusel de categorías */}
        <section className="bg-white p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Nuestras categorías deportivas
          </h2>
          <div className="container relative">
            <Slider ref={sliderRef} >
              {/* Renderiza las imágenes de las categorías */}
              {brands.map((brand) => (
                <div key={brand.id} className="relative">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="max-w-full h-auto"
                      style={{ maxHeight: "400px", minHeight: "200px", maxWidth: "600px", minWidth: "400px" }} // Establecemos un mínimo y máximo de altura
                    />
                    <p className="mt-2 text-gray-700 text-center">
                      {brand.name}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="absolute flex justify-between items-center w-full inset-y-0">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="absolute left-0 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="absolute right-0 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
