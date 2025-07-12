// src/components/pages/signinform.tsx

import { useState } from 'react'
import { signUpWithEmail } from '../../lib/supabase'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await signUpWithEmail(email, password)
      setSuccess(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSignup} className="space-y-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Sign Up</h2>
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
      {success && <p className="text-green-600">Check your email to confirm the account.</p>}
      <button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-2 rounded">
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  )
}
