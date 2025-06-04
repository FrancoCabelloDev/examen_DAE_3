import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import DestinationGrid from '../components/DestinationGrid';

export default function Home() {
  return (
    <div>
      {/* Hero principal con buscador */}
      <Hero />

      {/* Carrusel de propiedades destacadas */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Propiedades Destacadas
        </h2>
        <Carousel />
      </section>

      {/* Grid de destinos populares */}
      <section className="mt-12 mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Destinos Populares
        </h2>
        <DestinationGrid />
      </section>
    </div>
  );
}
