import { PhotoCard } from './components/PhotoCard';
import { FlowerBackground } from './components/FlowerBackground';
import { Cake, Gift, PartyPopper, Stars } from 'lucide-react';

const photos = [
  {
    imageUrl: "img/img1.jpeg",
    message: "¡Feliz cumpleaños mi amor! Cada momento con vos es un regalo."
  },
  {
    imageUrl: "img/img2.jpeg",
    message: "Me has mostrado que el amor verdadero se construye juntos, y eso me hace sentir todavia mas enamorado de vos, Gracias a vos creo que puedo ser mucho mejor."
  },
  {
    imageUrl: "img/img3.jpeg",
    message: "Que este nuevo año de vida esté lleno de sonrisas, amor y momentos inolvidables juntos."
  },
  {
    imageUrl: "img/img4.jpeg",
    message: "Tu alegría ilumina mi mundo. ¡Feliz cumpleaños, mi princesa!"
  },
  {
    imageUrl: "img/img8.jpeg",
    message: "Deseo que cada meta que quieras en tu vida se haga realidad."
  },
  {
    imageUrl: "img/img6.jpeg",
    message: "SoS el regalo más hermoso e increible que la vida pudo haber dado. ¡Feliz cumpleaños!"
  },
  {
    imageUrl: "img/img7.jpeg",
    message: "Que este día esté lleno de sorpresas tan especiales como lo sos vos."
  },
  {
    imageUrl: "img/img5.jpeg",
    message: "Tu presencia en mi vida es la que me esta guiando todos los días a intentar ser mejor, no puedo explicar las cosas que me haces sentir… pero mi amor por vos no depende de las circunstancias en las que estemos... estoy con vos no solo en los momentos felices, sino también en los más difíciles. Quiero compartir todo con vos, en cada paso del camino.Tu presencia en mi vida es la que me esta guiando todos los días a intentar ser mejor, no puedo explicar las cosas que me haces sentir… pero mi amor por vos no depende de las circunstancias en las que estemos... estoy con vos no solo en los momentos felices, sino también en los más difíciles. Quiero compartir todo con vos, en cada paso del camino."
  },
  {
    imageUrl: "img/img9.jpeg",
    message: "Cada año que pasa me enamoro más de ti. ¡Feliz cumpleaños, amor!"
  },
  {
    imageUrl: "img/img10.jpeg",
    message: "Lo que más valoro de nuestra relación es cómo ambos nos apoyamos y nos nutrimos mutuamente. Aunque tengamos nuestros celos espero que nunca dejemos de tratar de dar la mejor versión de nosotros mismos."
  }
];

export const App = () => {
  return (
    <div className="min-h-screen relative">
      <FlowerBackground />
      <div className="container mx-auto px-4 py-8 sm:py-12 relative">
        <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <PartyPopper className="w-7 h-7 sm:w-10 sm:h-10 text-pink-500" />
            <h1 className="text-2xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Te Amo Mi Vida ❤️
            </h1>
            <Cake className="w-7 h-7 sm:w-10 sm:h-10 text-pink-500" />
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars className="w-6 h-6 text-yellow-400" />
            <p className="text-gray-600 text-xl">Tenes Que Hacer Click En Cada Foto Para Descubrir Un Mensaje Especial</p>
            <Stars className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-[900px] mx-auto px-4">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              imageUrl={photo.imageUrl}
              message={photo.message}
            />
          ))}
        </div>
        
        <footer className="text-center mt-12">
          <div className="flex items-center justify-center gap-2">
            <Gift className="w-6 h-6 text-pink-500" />
            <p className="text-xl font-medium text-gray-700">
              Con todo mi amor, en tu día especial ❤️
            </p>
            <Gift className="w-6 h-6 text-pink-500" />
          </div>
        </footer>
      </div>
    </div>
  );
};