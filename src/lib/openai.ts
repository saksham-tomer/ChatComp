import axios from "axios";
import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function generateImagePrompt(name: string) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an creative and helpful AI assistance capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALLE API to generate a thumbnail. The description should be minimalistic and flat styled",
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my notebook titles ${name}`,
        },
      ],
    });
    const data = await response.json();
    console.log("dsfasdfsfsdf", data);
    const image_description = data.choices[0].message.content;
    return image_description as string;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// export async function generateImage(image_description: string) {
//   try {
//     const response = await openai.createImage({
//       prompt: image_description,
//       n: 1,
//       size: "256x256",
//     });
//     const data = await response.json();
//     const image_url = data.data[0].url;
//     return image_url as string;
//   } catch (error) {
//     console.error("error2");
//   }
// }

export async function generateImage(image_description: string) {
  const apiKey = process.env.STABILITY_API_KEY;

  if (!apiKey) {
    return new Error("API key is missing");
  }

  // Stability AI API endpoint
  const stabilityUrl =
    "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

  try {
    // Make a request to Stability AI to generate an image
    const response = await axios.post(
      stabilityUrl,
      {
        text_prompts: [{ text: image_description }],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        steps: 30,
        samples: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const image = response.data.artifacts[0].base64;
    return image as string;
  } catch (error) {
    console.error("Error generating image");
    throw error;
  }
}
