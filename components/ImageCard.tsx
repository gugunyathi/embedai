
import React from 'react';
import { GeneratedImage, ImageFormat } from '../types';

interface ImageCardProps {
  format: ImageFormat;
  image?: GeneratedImage;
}

export const ImageCard: React.FC<ImageCardProps> = ({ format, image }) => {
  const downloadImage = () => {
    if (!image) return;
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `${format.name.toLowerCase().replace(/\s+/g, '_')}_${format.width}x${format.height}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass rounded-2xl overflow-hidden flex flex-col h-full transition-transform hover:translate-y-[-4px] duration-300">
      <div className="relative group bg-slate-900 flex items-center justify-center p-4 h-64 overflow-hidden">
        {image ? (
          <>
            <img 
              src={image.url} 
              alt={format.name}
              className="max-w-full max-h-full object-contain shadow-2xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
              <button 
                onClick={downloadImage}
                className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-50 transition-colors"
                title="Download PNG"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 opacity-20">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">Pending...</span>
          </div>
        )}
        
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-white border border-white/10 uppercase">
            {format.width} × {format.height}
          </span>
          <span className="px-2 py-1 bg-blue-500/80 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase">
            {format.aspectRatio}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col gap-2 flex-grow">
        <h3 className="font-semibold text-lg text-white">{format.name}</h3>
        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {format.description}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {image ? 'Status: Complete' : 'Status: Waiting'}
          </span>
          {image && (
            <div className="flex items-center gap-1 text-[10px] text-green-400 font-bold uppercase">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Generated
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
