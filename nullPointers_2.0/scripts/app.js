import Groq from "groq-sdk";

const GROQ_API_KEY = "***REMOVED***";

const groq = new Groq({ apiKey: GROQ_API_KEY });

const prompt = "Hello";

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `${prompt}`,
      },
    ],
    model: "llama3-8b-8192",
  });
}
main();