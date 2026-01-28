
import React from 'react';
import { GeneratedImage } from '../types';
import { IMAGE_FORMATS } from '../constants';
import { ImageCard } from './ImageCard';

interface ImageGridProps {
  images: GeneratedImage[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {IMAGE_FORMATS.map((format) => {
        const generated = images.find(img => img.formatId === format.id);
        return (
          <ImageCard 
            key={format.id}
            format={format}
            image={generated}
          />
        );
      })}
    </div>
  );
};
