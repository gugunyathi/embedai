'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Header } from '@/components/Header';
import { PromptInput } from '@/components/PromptInput';
import { ImageGrid } from '@/components/ImageGrid';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { FormatShowcase } from '@/components/FormatShowcase';
import { IMAGE_FORMATS } from '@/constants';
import { GeneratedImage, GenerationState } from '@/types';
import { geminiService } from '@/services/geminiService';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [generationState, setGenerationState] = useState<GenerationState>({
    isGenerating: false,
    progress: 0,
  });

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleGenerate = async (targetPrompt: string) => {
    if (!targetPrompt.trim()) return;

    setGenerationState({
      isGenerating: true,
      progress: 0,
      currentFormatName: 'Initializing...',
      error: undefined,
    });
    setGeneratedImages([]); // Clear previous results

    const results: GeneratedImage[] = [];
    const total = IMAGE_FORMATS.length;

    try {
      for (let i = 0; i < IMAGE_FORMATS.length; i++) {
        const format = IMAGE_FORMATS[i];
        setGenerationState(prev => ({
          ...prev,
          progress: Math.round((i / total) * 100),
          currentFormatName: `Generating ${format.name}...`,
        }));

        const imageUrl = await geminiService.generateImage(targetPrompt, format.aspectRatio);
        
        const newImage: GeneratedImage = {
          formatId: format.id,
          url: imageUrl,
          prompt: targetPrompt,
          timestamp: Date.now(),
        };
        
        results.push(newImage);
        // Update incrementally for better UX
        setGeneratedImages([...results]);
      }

      setGenerationState({
        isGenerating: false,
        progress: 100,
      });
    } catch (error: any) {
      setGenerationState({
        isGenerating: false,
        progress: 0,
        error: error.message || 'An unexpected error occurred.',
      });
    }
  };

  return (
    <div className="min-h-screen pb-16 sm:pb-20">
      <Header />
      
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12">
          <FormatShowcase />
          
          <PromptInput 
            prompt={prompt}
            setPrompt={setPrompt}
            onGenerate={handleGenerate}
            disabled={generationState.isGenerating}
          />

          {generationState.error && (
            <div className="w-full max-w-2xl bg-red-900/30 border border-red-500/50 text-red-200 p-3 sm:p-4 rounded-xl text-center text-sm sm:text-base">
              {generationState.error}
            </div>
          )}

          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-2xl font-semibold flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="truncate">Generated Variants</span>
                {generatedImages.length > 0 && (
                  <span className="text-xs sm:text-sm font-normal text-slate-400">
                    ({generatedImages.length}/{IMAGE_FORMATS.length})
                  </span>
                )}
              </h2>
              
              {generatedImages.length > 0 && (
                <button 
                  onClick={() => setGeneratedImages([])}
                  className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors whitespace-nowrap"
                >
                  Clear All
                </button>
              )}
            </div>

            {generatedImages.length === 0 && !generationState.isGenerating ? (
              <div className="text-center py-12 sm:py-16 lg:py-20 bg-slate-800/20 border border-dashed border-slate-700 rounded-2xl sm:rounded-3xl px-4">
                <p className="text-sm sm:text-base text-slate-500">Enter a description above to start generating your design suite.</p>
              </div>
            ) : (
              <ImageGrid images={generatedImages} />
            )}
          </div>
        </div>
      </main>

      {generationState.isGenerating && (
        <LoadingOverlay 
          progress={generationState.progress} 
          status={generationState.currentFormatName || 'Generating...'} 
        />
      )}
    </div>
  );
}
