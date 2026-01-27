
import React from 'react';
import { GeneratedImage } from '../types';
import { IMAGE_FORMATS } from '../constants';
import { ImageCard } from './ImageCard';

interface ImageGridProps {
  images: GeneratedImage[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
