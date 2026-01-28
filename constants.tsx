
import { ImageFormat, ImageAspectRatio } from './types';

export const IMAGE_FORMATS: ImageFormat[] = [
  {
    id: 'hero',
    name: 'hero.png',
    width: 1200,
    height: 630,
    aspectRatio: ImageAspectRatio.WIDE,
    description: 'Social media hero image and Open Graph banner.'
  },
  {
    id: 'icon',
    name: 'icon.png',
    width: 1024,
    height: 1024,
    aspectRatio: ImageAspectRatio.SQUARE,
    description: 'App icon for stores and platforms.'
  },
  {
    id: 'logo',
    name: 'logo.png',
    width: 84,
    height: 84,
    aspectRatio: ImageAspectRatio.SQUARE,
    description: 'Small logo for favicons and compact displays.'
  },
  {
    id: 'splash',
    name: 'splash.png',
    width: 200,
    height: 200,
    aspectRatio: ImageAspectRatio.SQUARE,
    description: 'Profile pictures and avatar images.'
  },
  {
    id: 'screenshot_portrait',
    name: 'screenshot-portrait.png',
    width: 1024,
    height: 1536,
    aspectRatio: ImageAspectRatio.PORTRAIT,
    description: 'Portrait mode app screenshots.'
  },
  {
    id: 'screenshot',
    name: 'screenshot.png',
    width: 1284,
    height: 2778,
    aspectRatio: ImageAspectRatio.TALL,
    description: 'iPhone 14 Pro Max screenshot format.'
  },
  {
    id: 'screenshot2',
    name: 'screenshot2.png',
    width: 1170,
    height: 2532,
    aspectRatio: ImageAspectRatio.TALL,
    description: 'iPhone 14 Pro screenshot format.'
  },
  {
    id: 'screenshot3',
    name: 'screenshot3.png',
    width: 1170,
    height: 2532,
    aspectRatio: ImageAspectRatio.TALL,
    description: 'iPhone 14 Plus screenshot format.'
  }
];
