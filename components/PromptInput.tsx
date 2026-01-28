
import React, { KeyboardEvent } from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (val: string) => void;
  onGenerate: (prompt: string) => void;
  disabled: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onGenerate, disabled }) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !disabled) {
      e.preventDefault();
      onGenerate(prompt);
    }
  };

  return (
    <div className="w-full max-w-3xl glass p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl">
      <div className="flex flex-col gap-3 sm:gap-4">
        <label className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
          Design Description
        </label>
        <div className="relative group">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g., A futuristic neon cityscape at sunset, synthwave aesthetic, high detail, volumetric lighting..."
            className="w-full h-24 sm:h-32 bg-slate-900/50 border border-slate-700 focus:border-blue-500 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-sm sm:text-base text-slate-100 placeholder:text-slate-600 outline-none transition-all resize-none"
            disabled={disabled}
          />
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-blue-500/20 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mt-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hidden sm:inline">Generates 7 optimized formats automatically</span>
            <span className="sm:hidden">7 formats auto-generated</span>
          </div>
          
          <button
            onClick={() => onGenerate(prompt)}
            disabled={disabled || !prompt.trim()}
            className={`
              w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-sm sm:text-base
              ${disabled || !prompt.trim() 
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-[1.02] active:scale-[0.98] hover:shadow-blue-500/25'}
            `}
          >
            {disabled ? (
              <>
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <span className="hidden sm:inline">Generating Suite...</span>
                <span className="sm:hidden">Generating...</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Generate Design Suite</span>
                <span className="sm:hidden">Generate</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
