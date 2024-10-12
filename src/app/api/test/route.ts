import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI instance with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Store your API key in environment variables
});

// Handle POST requests for OpenAI API interaction
export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Missing "prompt" in request body' },
        { status: 400 }
      );
    }

    // Example: Using GPT-3.5-turbo for completions
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const completion = response.choices[0].message.content.trim();

    return NextResponse.json({ completion });
  } catch (error) {
    console.error("Error with OpenAI API:", error);

    return NextResponse.json(
      { error: "Error occurred while processing the request." },
      { status: 500 }
    );
  }
}
