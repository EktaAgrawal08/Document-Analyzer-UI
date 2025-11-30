"use client"

import { File } from "lucide-react"

export function DocumentViewer() {
  return (
    <div className="flex-1 card-hover p-8 flex flex-col items-center justify-center min-h-0 shadow-lg">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <File className="w-8 h-8 text-primary" />
      </div>
      <p className="text-lg font-semibold text-foreground mb-2">Document viewer</p>
      <p className="text-muted-foreground text-center">Your document preview will appear here</p>
    </div>
  )
}
