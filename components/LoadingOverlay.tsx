
import React from 'react';

interface LoadingOverlayProps {
  progress: number;
  status: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ progress, status }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-3 sm:p-4">
      <div className="w-full max-w-sm sm:max-w-md bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center gap-4 sm:gap-6">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-slate-800"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={251.2}
              strokeDashoffset={251.2 - (251.2 * progress) / 100}
              strokeLinecap="round"
              className="text-blue-500 transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg sm:text-xl font-bold">{progress}%</span>
          </div>
        </div>
        
        <div className="text-center space-y-1 sm:space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-white">Generating Your Asset Suite</h3>
          <p className="text-xs sm:text-sm text-slate-400 font-medium animate-pulse line-clamp-2 px-2">{status}</p>
        </div>
        
        <div className="w-full space-y-2 sm:space-y-3">
          <div className="flex justify-between text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span>Optimizing</span>
            <span>{Math.floor(progress/15) + 1} / 7</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <p className="text-[9px] sm:text-[10px] text-slate-600 italic text-center leading-relaxed px-2">
          Gemini is rendering professional variants based on your creative vision. This usually takes 30-60 seconds.
        </p>
      </div>
    </div>
  );
};
