import React, { useEffect, useState } from 'react';
import { Flower } from 'lucide-react';

export const FlowerBackground = () => {
  const [flowers, setFlowers] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
    scale: number;
    rotation: number;
    bottom: number;
  }>>([]);

  useEffect(() => {
    const createFlower = (index: number) => ({
      id: Math.random(),
      left: Math.random() * 100,
      delay: index * 0.1,
      duration: Math.random() * 3 + 8,
      scale: Math.random() * 0.4 + 0.6,
      rotation: Math.floor(Math.random() * 360),
      bottom: -10
    });

    const initialFlowers = Array(100).fill(null).map((_, index) => createFlower(index));
    setFlowers(initialFlowers);

    return () => {
      setFlowers([]);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/90 to-purple-100/90 backdrop-blur-sm">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-pink-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animation: `float ${Math.random() * 5 + 3}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute animate-flower"
          style={{
            left: `${flower.left}%`,
            bottom: `${flower.bottom}%`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
            transform: `scale(${flower.scale})`
          }}
        >
          <Flower 
            className="w-8 h-8 text-yellow-400"
            style={{
              filter: 'drop-shadow(0 0 3px rgba(250, 204, 21, 0.7))',
              transform: `rotate(${flower.rotation}deg)`
            }}
          />
        </div>
      ))}
    </div>
  );
};