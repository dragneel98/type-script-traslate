import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({ apiKey })
const openai = new OpenAIApi(configuration)
