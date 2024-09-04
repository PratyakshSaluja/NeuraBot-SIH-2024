const Groq = require("groq-sdk");

GROQ_API_KEY = "***REMOVED***";

const groq = new Groq({ apiKey: GROQ_API_KEY });

async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama3-8b-8192",
  });
}

module.exports = { getGroqChatCompletion };