// src/components/pages/loginform.tsx

import { useState } from 'react'
import { signInWithEmail } from '../../lib/supabase'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await signInWithEmail(email, password)
      // Optional: Fetch user profile here if needed
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />
      {error && <p className="text-red-600">{error}</p>}
      <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}
