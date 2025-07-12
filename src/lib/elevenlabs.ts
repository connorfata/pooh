import axios from 'axios'

const ELEVENLABS_API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY
const ELEVENLABS_BASE_URL = 'https://api.elevenlabs.io/v1'

if (!ELEVENLABS_API_KEY) {
  console.warn('Missing ElevenLabs API key - voice features will be disabled')
}

const elevenlabsClient = axios.create({
  baseURL: ELEVENLABS_BASE_URL,
  headers: {
    'xi-api-key': ELEVENLABS_API_KEY || '',
    'Content-Type': 'application/json',
  },
})

export interface VoiceSettings {
  stability: number
  similarity_boost: number
  style?: number
  use_speaker_boost?: boolean
}

export interface TextToSpeechOptions {
  voice_id: string
  text: string
  model_id?: string
  voice_settings?: VoiceSettings
}

export const textToSpeech = async (options: TextToSpeechOptions): Promise<ArrayBuffer> => {
  try {
    const response = await elevenlabsClient.post(
      `/text-to-speech/${options.voice_id}`,
      {
        text: options.text,
        model_id: options.model_id || 'eleven_monolingual_v1',
        voice_settings: options.voice_settings || {
          stability: 0.5,
          similarity_boost: 0.8,
        },
      },
      {
        responseType: 'arraybuffer',
      }
    )
    return response.data
  } catch (error) {
    console.error('ElevenLabs TTS Error:', error)
    throw error
  }
}

export const getVoices = async () => {
  try {
    const response = await elevenlabsClient.get('/voices')
    return response.data
  } catch (error) {
    console.error('ElevenLabs Get Voices Error:', error)
    throw error
  }
}

export const getUserInfo = async () => {
  try {
    const response = await elevenlabsClient.get('/user')
    return response.data
  } catch (error) {
    console.error('ElevenLabs User Info Error:', error)
    throw error
  }
} 