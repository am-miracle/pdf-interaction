import { Configuration, OpenAIApi } from "openai-edge";
import {} from "openai"
import OpenAI from "openai";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

// const openai = new OpenAIApi(config)
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function getEmbeddings(text: string) {
    try {
        const response = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: text.replace(/\n/g, ' '),
        });
      const result = await response;
      console.log("result" ,result)
      return result.data?.[0]?.embedding as number[];
    } catch (error) {
      console.log("error calling openai embeddings api", error);
      throw error;
    }
}