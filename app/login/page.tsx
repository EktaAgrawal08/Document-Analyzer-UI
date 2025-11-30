"use client"

import type React from "react"
import { useState, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [loginError, setLoginError] = useState("")

  const validateEmail = (value: string): boolean => {
    if (!value) return false
    if (!value.includes("@")) return false
    const domainPattern = /^[^@]+@[^@]+\.(com|in|org|net|edu|gov|co|uk|io|dev|app|ai)$/i
    return domainPattern.test(value)
  }

  const getEmailError = (value: string): string => {
    if (!value) return ""
    if (!value.includes("@")) return "Email must contain @"
    const domainPattern = /^[^@]+@[^@]+\.(com|in|org|net|edu|gov|co|uk|io|dev|app|ai)$/i
    if (!domainPattern.test(value)) {
      return "Email must have a valid domain (.com, .in, .org, etc.)"
    }
    return ""
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setEmailError(getEmailError(value))
  }

  const isFormValid = useMemo(() => {
    return email.length > 0 && password.length > 0 && validateEmail(email) && !getEmailError(email)
  }, [email, password])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return

    setIsLoading(true)
    setLoginError("")

    setTimeout(() => {
      if (Math.random() > 0.3) {
        localStorage.setItem("isLoggedIn", "true")
        router.push("/dashboard")
      } else {
        setLoginError("Invalid email or password. Please try again.")
        setIsLoading(false)
      }
    }, 1200)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">DA</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">DocAnalyzer</h1>
          </div>
          <p className="text-muted-foreground">AI-Powered Document Intelligence</p>
        </div>

        {/* Login Card */}
        <div className="card-hover p-6 mb-6 animate-in fade-in slide-in-from-top-4 duration-700 shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-foreground">Welcome back</h2>

          {loginError && (
            <div className="mb-4 p-4 bg-destructive/10 border border-destructive rounded-lg flex gap-3 animate-in fade-in duration-300">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">{loginError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="your@email.com"
                  value={email}
                  onChange={handleEmailChange}
                  className={`input-field pl-10 transition-colors ${
                    emailError ? "border-destructive focus:ring-destructive" : ""
                  }`}
                />
              </div>
              {emailError && (
                <p className="text-xs text-destructive flex items-center gap-1 animate-in fade-in duration-200">
                  <AlertCircle className="w-3 h-3" />
                  {emailError}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                <input type="checkbox" className="w-4 h-4 rounded border-border bg-input cursor-pointer" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-muted-foreground animate-in fade-in duration-700 delay-100">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary font-medium hover:underline transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  )
}
