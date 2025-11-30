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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Intelligent Document <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Analysis</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload your documents and let our AI-powered assistant extract insights, summarize content, and answer your questions in seconds.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#features" className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium">
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image/Preview */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border p-8 mb-20">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <FileText className="w-20 h-20 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Powerful Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="card-hover p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">AI-Powered Analysis</h4>
            <p className="text-muted-foreground">
              Advanced machine learning algorithms analyze your documents to extract key information and insights automatically.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card-hover p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Lightning Fast</h4>
            <p className="text-muted-foreground">
              Process documents in seconds. Get instant summaries and answers without waiting for long analysis times.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card-hover p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Secure & Private</h4>
            <p className="text-muted-foreground">
              Your documents are encrypted and protected. We never share your data with third parties.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="card-hover p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Multiple Formats</h4>
            <p className="text-muted-foreground">
              Support for PDF, Word documents, and text files. Works with any document type you throw at it.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="card-hover p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Smart Insights</h4>
            <p className="text-muted-foreground">
              Get detailed analytics and visualizations of document content with actionable insights.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="card-hover p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Save Time</h4>
            <p className="text-muted-foreground">
              Eliminate manual document review. Automate your workflow and focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          How It Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">
              1
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Upload</h4>
            <p className="text-muted-foreground">
              Upload your document in any supported format (PDF, Word, or Text)
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">
              2
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Analyze</h4>
            <p className="text-muted-foreground">
              Our AI analyzes your document and extracts key information instantly
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">
              3
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Insights</h4>
            <p className="text-muted-foreground">
              Get summaries, insights, and ask questions about your documents
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to transform your document workflow?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of users who are saving time and getting better insights with DocAnalyzer.
          </p>
          <Link href="/signup" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2">
            Get Started Free <ArrowRight className="w-5 h-5" />
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
