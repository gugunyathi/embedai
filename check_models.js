const { GoogleGenAI } = require("@google/genai");
const fs = require('fs');
const path = require('path');

// Read .env.local manually
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/GEMINI_API_KEY=(.*)/);
const apiKey = apiKeyMatch ? apiKeyMatch[1].trim() : '';

console.log("Using API Key:", apiKey ? "Found key ending in " + apiKey.slice(-4) : "Not Found");

const ai = new GoogleGenAI({ apiKey: apiKey });

async function listModels() {
  try {
    const response = await ai.models.list();
    console.log("Models found");
    if (response && response.models) {
        response.models.sort().forEach(m => {
            console.log(m.name);
        });
    } else {
        console.log("No models property in response", response);
    }
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listModels();