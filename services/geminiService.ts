import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Singleton instance of the chat session to preserve context across re-renders
let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are "Yuki's Assistant", a helpful AI answering questions for a professional illustrator's portfolio site.
The artist's name is Yuki.
Style: Digital Art, Fantasy, Cyberpunk, and Watercolor styles.
Commission Status: OPEN.
Rates: 
- Sketches: $50+
- Full Body Character: $150+
- Full Illustration with Background: $300+
Contact: contact@yukiart.example.com
Tools: Procreate, Photoshop, Blender.

Your persona: Polite, concise, professional but artistic. 
If asked about pricing, give the ranges above. 
If asked for a specific quote, politely ask them to fill out the contact form with details.
Do not hallucinate artworks that don't exist.
Keep answers under 3 sentences unless asked for details.
Japanese language is preferred if the user speaks Japanese, otherwise English.
`;

export const getChatResponseStream = async function* (userMessage: string): AsyncGenerator<string, void, unknown> {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    yield "Error: API Key missing. Please set the API_KEY environment variable.";
    return;
  }

  const ai = new GoogleGenAI({ apiKey });

  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }

  try {
    const resultStream = await chatSession.sendMessageStream({ message: userMessage });

    for await (const chunk of resultStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "申し訳ありません、現在AIアシスタントに接続できません。";
  }
};