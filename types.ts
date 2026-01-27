
export enum ImageAspectRatio {
  SQUARE = "1:1",
  PORTRAIT = "3:4",
  LANDSCAPE = "4:3",
  WIDE = "16:9",
  TALL = "9:16"
}

export interface ImageFormat {
  id: string;
  name: string;
  width: number;
  height: number;
  aspectRatio: ImageAspectRatio;
  description: string;
}

export interface GeneratedImage {
  formatId: string;
  url: string;
  prompt: string;
  timestamp: number;
}

export interface GenerationState {
  isGenerating: boolean;
  progress: number;
  currentFormatName?: string;
  error?: string;
}
