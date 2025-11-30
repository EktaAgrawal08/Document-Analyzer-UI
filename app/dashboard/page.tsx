"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { DocumentCard } from "@/components/document-card"
import { Plus, Grid, List } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [mounted, setMounted] = useState(false)
  const [documents, setDocuments] = useState<
    Array<{ id: number; name: string; type: string; date: string; size: string }>
  >([])

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
        <Header title="Dashboard" />

        <div className="flex-1 overflow-auto">
          <div className="p-6 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back</h2>
              <p className="text-muted-foreground">Upload and analyze your documents with AI-powered insights</p>
            </div>

            {/* Upload CTA */}
            <Link href="/upload">
              <div className="card-hover p-8 mb-8 cursor-pointer hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1 text-center">Upload a document</h3>
                <p className="text-muted-foreground text-center">PDF, Word, or Text files</p>
              </div>
            </Link>

            {/* Documents Section */}
            {documents.length > 0 ? (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Your documents</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === "grid"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-primary/20"
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === "list"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-primary/20"
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Grid View */}
                {viewMode === "grid" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {documents.map((doc) => (
                      <DocumentCard key={doc.id} document={doc} />
                    ))}
                  </div>
                )}

                {/* List View */}
                {viewMode === "list" && (
                  <div className="space-y-2">
                    {documents.map((doc) => (
                      <Link key={doc.id} href={`/viewer/${doc.id}`}>
                        <div className="card-hover p-4 flex items-center justify-between cursor-pointer hover:shadow-lg transition-all duration-200">
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">{doc.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-foreground">{doc.type}</p>
                            <p className="text-sm text-muted-foreground">{doc.size}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Add empty state when no documents */
              <div className="card-hover p-12 text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No documents uploaded yet</h3>
                <p className="text-muted-foreground mb-6">Upload your first document to get started</p>
                <Link href="/upload" className="btn-primary inline-block">
                  Upload Document
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
