//do npm install --save openai
import OpenAI from "openai"

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    throw Error("No OPENAI API key provided");
}

const openai = new OpenAI({ apiKey });

export default openai;
