"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { DocumentViewer } from "@/components/document-viewer"
import { AIToolsPanel } from "@/components/ai-tools-panel"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function ViewerPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("summary")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [router])

  if (!mounted) return null

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header title="Document Analyzer">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to dashboard
          </Link>
        </Header>

        <div className="flex-1 overflow-hidden flex gap-4 p-4">
          {/* Document Viewer - Left Side */}
          <DocumentViewer />

          {/* AI Tools Panel - Right Side */}
          <AIToolsPanel activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </main>
    </div>
  )
}
