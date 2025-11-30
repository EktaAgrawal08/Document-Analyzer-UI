"use client"

import Link from "next/link"
import { ArrowRight, FileText, Zap, Brain, Shield, BarChart3, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">DA</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">DocAnalyzer</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Intelligent Document <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Analysis</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Upload your documents and let our AI-powered assistant extract insights in seconds.
            </p>
            <div className="flex gap-4">
              <Link href="/signup" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#features" className="px-6 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium">
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border p-6 aspect-square flex items-center justify-center">
            <div className="text-center">
              <svg className="w-32 h-32 mx-auto mb-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z"/>
                <path d="M16 18H8m0-4h8m0-4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p className="text-muted-foreground font-medium">AI Document Analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          Powerful Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Feature 1 */}
          <div className="card-hover p-4 rounded-lg border border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">AI Analysis</h4>
            <p className="text-sm text-muted-foreground">
              Extract insights automatically from your documents.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card-hover p-4 rounded-lg border border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Lightning Fast</h4>
            <p className="text-sm text-muted-foreground">
              Get results in seconds.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card-hover p-4 rounded-lg border border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Secure</h4>
            <p className="text-sm text-muted-foreground">
              Your data is encrypted.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="card-hover p-4 rounded-lg border border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Multi-Format</h4>
            <p className="text-sm text-muted-foreground">
              PDF, Word, and text files.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="card-hover p-4 rounded-lg border border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Smart Insights</h4>
            <p className="text-sm text-muted-foreground">
              Get actionable insights.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="card-hover p-4 rounded-lg border border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Save Time</h4>
            <p className="text-sm text-muted-foreground">
              Automate your workflow.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          How It Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground text-lg font-bold">
              1
            </div>
            <h4 className="font-semibold text-foreground mb-1">Upload</h4>
            <p className="text-sm text-muted-foreground">
              Upload your document
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground text-lg font-bold">
              2
            </div>
            <h4 className="font-semibold text-foreground mb-1">Analyze</h4>
            <p className="text-sm text-muted-foreground">
              AI analyzes instantly
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground text-lg font-bold">
              3
            </div>
            <h4 className="font-semibold text-foreground mb-1">Insights</h4>
            <p className="text-sm text-muted-foreground">
              Get results & insights
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Ready to get started?
          </h3>
          <p className="text-muted-foreground mb-4">
            Join users who are saving time with DocAnalyzer.
          </p>
          <Link href="/signup" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2">
            Get Started Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">DA</span>
                </div>
                <h4 className="font-bold text-foreground">DocAnalyzer</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered document analysis for everyone.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 DocAnalyzer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
