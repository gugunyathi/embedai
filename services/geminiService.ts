
import { GoogleGenAI } from "@google/genai";
import { ImageAspectRatio } from "../types";

export class GeminiService {
  private ai: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
  }

  async generateImage(prompt: string, aspectRatio: ImageAspectRatio, formatId?: string): Promise<string> {
    try {
      // Base context for mobile app store assets to ensure high quality and relevance
      const appStoreContext = "Create a professional mobile app asset for App Store preview and discoverability (icon, screenshot, or feature graphic). ";
      
      let finalPrompt = `${appStoreContext} ${prompt}`;

      // For splash.png, add transparent background requirement
      if (formatId === 'splash') {
        finalPrompt = `${finalPrompt}. IMPORTANT: Generate with completely transparent background, no background color, transparent PNG with alpha channel`;
      }
      
      const makeRequest = async (retries = 3, delay = 12000): Promise<any> => {
        const potentialModels = [
          'gemini-3-pro-image-preview', 
          'gemini-2.0-flash-exp-image-generation',
          'gemini-2.5-flash-image'
        ];
        
        // Helper to try a specific model
        const tryModel = async (modelName: string): Promise<any> => {
          console.log(`Attempting generation with model: ${modelName}`);
          return await this.ai.models.generateContent({
            model: modelName,
            contents: { parts: [{ text: finalPrompt }] },
            config: { imageConfig: { aspectRatio: aspectRatio } },
          });
        };

        try {
          // Try primary model (Gemini 3)
          return await tryModel(potentialModels[0]);
        } catch (err: any) {
          console.warn(`Model ${potentialModels[0]} failed: ${err.message}`);
          
          // If status is 404 (Not Found) or 429 (Quota), try fallback models
          if (err.status === 404 || err.status === 429 || err.status === 503) {
            try {
              return await tryModel(potentialModels[1]);
            } catch (fallbackErr: any) {
               console.warn(`Fallback model ${potentialModels[1]} failed: ${fallbackErr.message}`);
               // If that allows, maybe try the 3rd one, but for now let's stop or throw
               throw fallbackErr;
            }
          }
          
          if ((err.status === 429 || err.message?.includes('429')) && retries > 0) {
            console.log(`Rate limit hit, retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return makeRequest(retries - 1, delay * 1.5);
          }
          throw err;
        }
      };

      const response = await makeRequest();

      let base64Image = '';
      
      // The API returns multiple parts, find the one with inlineData (the image)
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          base64Image = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      if (!base64Image) {
        throw new Error("No image data received from the model.");
      }

      return base64Image;
    } catch (error: any) {
      console.error("Gemini Image Generation Error:", error);
      throw new Error(error.message || "Failed to generate image. Please try again.");
    }
  }
}

export const geminiService = new GeminiService();
