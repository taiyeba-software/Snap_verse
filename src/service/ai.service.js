const { GoogleGenAI } = require ("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
    /**
     ✅ You’re asking Gemini to generate content using the "gemini-2.5-flash" model.

        🧠 You’re sending the prompt: "Explain how AI works in a few words"
     */
  });
  console.log(response.text);
}

main();