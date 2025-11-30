"use client"

import type React from "react"
import { useState, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, User, AlertCircle, CheckCircle2 } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [passwordErrors, setPasswordErrors] = useState<string[]>([])
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const validatePassword = (value: string): string[] => {
    const errors: string[] = []
    if (value.length < 8) errors.push("At least 8 characters")
    if (!/[A-Z]/.test(value)) errors.push("At least 1 uppercase letter")
    if (!/[a-z]/.test(value)) errors.push("At least 1 lowercase letter")
    if (!/[0-9]/.test(value)) errors.push("At least 1 number")
    if (!/[!@#$%^&*]/.test(value)) errors.push("At least 1 special character (!@#$%^&*)")
    return errors
  }

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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    const errors = validatePassword(value)
    setPasswordErrors(errors)
    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match")
    } else if (confirmPassword) {
      setConfirmPasswordError("")
    }
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setConfirmPassword(value)
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match")
    } else {
      setConfirmPasswordError("")
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setEmailError(getEmailError(value))
  }

  const getPasswordStrength = (): string => {
    if (passwordErrors.length === 0) return "Strong"
    if (passwordErrors.length <= 2) return "Medium"
    return "Weak"
  }

  const getStrengthColor = (): string => {
    const strength = getPasswordStrength()
    if (strength === "Strong") return "text-green-500"
    if (strength === "Medium") return "text-yellow-500"
    return "text-destructive"
  }

  const isFormValid = useMemo(() => {
    return (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      validatePassword(password).length === 0 &&
      confirmPassword === password &&
      !getEmailError(email) &&
      validateEmail(email) &&
      termsAccepted
    )
  }, [name, email, password, confirmPassword, termsAccepted])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return

    setIsLoading(true)
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true")
      router.push("/dashboard")
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
          <p className="text-muted-foreground">Join our platform</p>
        </div>

        {/* Signup Card */}
        <div className="card-hover p-6 mb-6 animate-in fade-in slide-in-from-top-4 duration-700 shadow-lg max-h-[90vh] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6 text-foreground">Create account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Full name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
            </div>

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

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`input-field pl-10 pr-10 transition-colors ${
                    password && passwordErrors.length > 0 ? "border-destructive" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {password && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Strength:</span>
                    <span className={`text-xs font-medium ${getStrengthColor()}`}>{getPasswordStrength()}</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        getPasswordStrength() === "Strong"
                          ? "w-full bg-green-500"
                          : getPasswordStrength() === "Medium"
                            ? "w-2/3 bg-yellow-500"
                            : "w-1/3 bg-destructive"
                      }`}
                    />
                  </div>

                  <div className="space-y-1 mt-2">
                    {[
                      { text: "At least 8 characters", met: password.length >= 8 },
                      { text: "At least 1 uppercase letter", met: /[A-Z]/.test(password) },
                      { text: "At least 1 lowercase letter", met: /[a-z]/.test(password) },
                      { text: "At least 1 number", met: /[0-9]/.test(password) },
                      { text: "At least 1 special character", met: /[!@#$%^&*]/.test(password) },
                    ].map((req, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        {req.met ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span
                          className={`text-xs ${req.met ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}
                        >
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Confirm password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`input-field pl-10 pr-10 transition-colors ${
                    confirmPasswordError ? "border-destructive focus:ring-destructive" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {confirmPasswordError && (
                <p className="text-xs text-destructive flex items-center gap-1 animate-in fade-in duration-200">
                  <AlertCircle className="w-3 h-3" />
                  {confirmPasswordError}
                </p>
              )}
              {confirmPassword && !confirmPasswordError && (
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-3 h-3" />
                  Passwords match
                </p>
              )}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 rounded border-border bg-input cursor-pointer mt-1 flex-shrink-0"
              />
              <span className="text-sm text-muted-foreground">I agree to the Terms of Service and Privacy Policy</span>
            </label>

            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </button>
          </form>
        </div>

        {/* Login Link */}
        <p className="text-center text-muted-foreground animate-in fade-in duration-700 delay-100">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium hover:underline transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  )
}
