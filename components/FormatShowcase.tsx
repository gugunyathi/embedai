import React from 'react';
import Image from 'next/image';

export const FormatShowcase: React.FC = () => {
  const actualFormats = [
    { name: 'hero.png', file: '/hero.png', width: 1200, height: 630, ratio: '1.90' },
    { name: 'icon.png', file: '/icon.png', width: 1024, height: 1024, ratio: '1.00' },
    { name: 'logo.png', file: '/logo.png', width: 84, height: 84, ratio: '1.00' },
    { name: 'splash.png', file: '/splash.png', width: 200, height: 200, ratio: '1.00' },
    { name: 'screenshot-portrait.png', file: '/screenshot-portrait.png', width: 1024, height: 1536, ratio: '0.67' },
    { name: 'screenshot.png', file: '/screenshot.png', width: 1284, height: 2778, ratio: '0.46' },
    { name: 'screenshot2.png', file: '/screenshot2.png', width: 1170, height: 2532, ratio: '0.46' },
    { name: 'screenshot3.png', file: '/screenshot3.png', width: 1170, height: 2532, ratio: '0.46' },
  ];

  return (
    <div className="w-full max-w-5xl">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Generate 8 Professional Formats Instantly</h2>
        <p className="text-xs sm:text-sm text-slate-400">Each prompt creates optimized variants for all major platforms</p>
      </div>
      
      <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 lg:gap-4">
        {actualFormats.map((format, index) => (
          <div 
            key={index}
            className="glass rounded-lg sm:rounded-xl p-2 sm:p-3 flex flex-col items-center gap-1.5 sm:gap-2 hover:border-blue-500/50 transition-all cursor-pointer group"
          >
            <div 
              className="w-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-md sm:rounded-lg flex items-center justify-center relative overflow-hidden group-hover:from-blue-900/30 group-hover:to-indigo-900/30 transition-all"
              style={{ 
                aspectRatio: format.width / format.height
              }}
            >
              <Image
                src={format.file}
                alt={format.name}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 14vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-1 right-1 px-1 py-0.5 bg-black/60 rounded text-[8px] sm:text-[9px] font-bold text-white">
                {format.ratio}
              </div>
            </div>
            
            <div className="text-center w-full">
              <h3 className="text-[9px] sm:text-[10px] font-bold text-white truncate">{format.name}</h3>
              <p className="text-[8px] sm:text-[9px] text-slate-500 font-medium">{format.width}×{format.height}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
