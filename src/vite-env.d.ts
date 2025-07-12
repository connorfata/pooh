/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_ELEVENLABS_API_KEY: string
  readonly VITE_N8N_WEBHOOK_URL: string
  readonly VITE_DEV_MODE: string
  readonly VITE_DEBUG_3D: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 