
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-4 sm:py-6 border-b border-white/5 bg-slate-900/50 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div className="min-w-0">
            <h1 className="text-sm sm:text-xl font-bold tracking-tight truncate">AI Multi-Format Studio</h1>
            <p className="hidden sm:block text-xs text-slate-400 uppercase tracking-widest font-medium">Base Mini App Professional Assets Generator</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Documentation</a>
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">API Keys</a>
          <button className="px-3 lg:px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-all">
            Settings
          </button>
        </div>
      </div>
    </header>
  );
};
