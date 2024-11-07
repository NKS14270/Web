import React, { useState } from 'react';
import { Heart, PartyPopper } from 'lucide-react';

interface PhotoCardProps {
  imageUrl: string;
  message: string;
}

export const PhotoCard = ({ imageUrl, message }: PhotoCardProps) => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  return (
    <div className="relative group cursor-pointer w-full" onClick={() => setIsMessageVisible(!isMessageVisible)}>
      <div className="relative bg-white rounded-2xl shadow-xl p-2 transition-all duration-300 transform hover:scale-[1.02]">
        <div className="relative rounded-xl shadow-lg overflow-hidden aspect-[4/5]">
          <img 
            src={imageUrl} 
            alt="Momento especial" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center gap-3">
              <Heart className="w-12 h-12 text-pink-400 animate-pulse" />
              <PartyPopper className="w-12 h-12 text-yellow-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      
      {isMessageVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4" onClick={() => setIsMessageVisible(false)}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-32 items-center">
              <Heart 
                className="w-24 h-24 text-pink-400 animate-heartbeat"
                style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.7))' }}
              />
              <div 
                className="bg-gradient-to-br from-pink-50/10 to-purple-50/10 backdrop-blur-sm rounded-2xl p-8 max-w-md transform scale-90 hover:scale-100 transition-all duration-300 shadow-2xl border border-white/20" 
                onClick={e => e.stopPropagation()}
              >
                <p className="text-white text-xl font-medium italic text-center leading-relaxed">
                  "{message}"
                </p>
              </div>
              <Heart 
                className="w-24 h-24 text-pink-400 animate-heartbeat"
                style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.7))' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};