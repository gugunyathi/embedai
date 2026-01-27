
import { ImageFormat, ImageAspectRatio } from './types';

export const IMAGE_FORMATS: ImageFormat[] = [
  {
    id: 'landscape_hr',
    name: 'High-Res Landscape',
    width: 1536,
    height: 1024,
    aspectRatio: ImageAspectRatio.LANDSCAPE,
    description: 'Perfect for desktop wallpapers and website headers.'
  },
  {
    id: 'square_hr',
    name: 'Standard Square',
    width: 1024,
    height: 1024,
    aspectRatio: ImageAspectRatio.SQUARE,
    description: 'Universal format for social media and product shots.'
  },
  {
    id: 'social_og',
    name: 'Social Banner (OG)',
    width: 1200,
    height: 630,
    aspectRatio: ImageAspectRatio.WIDE,
    description: 'Optimized for social media link sharing (Open Graph).'
  },
  {
    id: 'favicon',
    name: 'App Favicon',
    width: 84,
    height: 84,
    aspectRatio: ImageAspectRatio.SQUARE,
    description: 'Small icon for browser tabs and mobile shortcuts.'
  },
  {
    id: 'portrait_hr',
    name: 'High-Res Portrait',
    width: 1024,
    height: 1536,
    aspectRatio: ImageAspectRatio.PORTRAIT,
    description: 'Ideal for posters and full-page mobile content.'
  },
  {
    id: 'mobile_splash',
    name: 'Mobile Splash',
    width: 1284,
    height: 2778,
    aspectRatio: ImageAspectRatio.TALL,
    description: 'Full-screen splash images for iOS and Android.'
  },
  {
    id: 'profile_pic',
    name: 'Profile Picture',
    width: 200,
    height: 200,
    aspectRatio: ImageAspectRatio.SQUARE,
    description: 'Optimized for user avatars and circular icons.'
  }
];
