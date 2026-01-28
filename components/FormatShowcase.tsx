import React from 'react';
import Image from 'next/image';
import { IMAGE_FORMATS } from '@/constants';
import { GeneratedImage } from '@/types';

interface FormatShowcaseProps {
  generatedImages?: GeneratedImage[];
}

export const FormatShowcase: React.FC<FormatShowcaseProps> = ({ generatedImages = [] }) => {
  const placeholderFiles = [
    '/hero.png',
    '/icon.png',
    '/logo.png',
    '/splash.png',
    '/screenshot-portrait.png',
    '/screenshot.png',
    '/screenshot2.png',
    '/screenshot3.png',
  ];

  return (
    <div className="w-full max-w-5xl">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Generate 8 Professional Formats Instantly</h2>
        <p className="text-xs sm:text-sm text-slate-400">Each prompt creates optimized variants for all major platforms</p>
        <p className="text-[10px] sm:text-xs text-yellow-500/80 mt-2 font-medium">⚠️ Note: Generation takes 2-3 minutes to complete safely</p>
      </div>
      
      <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 lg:gap-4">
        {IMAGE_FORMATS.map((format, index) => {
          const generatedImage = generatedImages.find(img => img.formatId === format.id);
          const ratio = (format.width / format.height).toFixed(2);
          
          return (
            <div 
              key={format.id}
              className="glass rounded-lg sm:rounded-xl p-2 sm:p-3 flex flex-col items-center gap-1.5 sm:gap-2 hover:border-blue-500/50 transition-all cursor-pointer group"
            >
              <div 
                className="w-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-md sm:rounded-lg flex items-center justify-center relative overflow-hidden group-hover:from-blue-900/30 group-hover:to-indigo-900/30 transition-all"
                style={{ 
                  aspectRatio: format.width / format.height
                }}
              >
                {generatedImage ? (
                  <img
                    src={generatedImage.url}
                    alt={format.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={placeholderFiles[index]}
                    alt={format.name}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 14vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-1 right-1 px-1 py-0.5 bg-black/60 rounded text-[8px] sm:text-[9px] font-bold text-white">
                  {ratio}
                </div>
              </div>
              
              <div className="text-center w-full">
                <h3 className="text-[9px] sm:text-[10px] font-bold text-white truncate">{format.name}</h3>
                <p className="text-[8px] sm:text-[9px] text-slate-500 font-medium">{format.width}×{format.height}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
