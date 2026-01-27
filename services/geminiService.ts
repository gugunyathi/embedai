
import { GoogleGenAI } from "@google/genai";
import { ImageAspectRatio } from "../types";

export class GeminiService {
  private ai: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateImage(prompt: string, aspectRatio: ImageAspectRatio): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: prompt,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
          },
        },
      });

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
