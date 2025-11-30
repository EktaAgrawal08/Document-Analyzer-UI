"use client"

import Link from "next/link"
import { File, MoreVertical } from "lucide-react"
import { useState } from "react"

interface Document {
  id: number
  name: string
  type: string
  date: string
  size: string
}

interface DocumentCardProps {
  document: Document
}

export function DocumentCard({ document }: DocumentCardProps) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Link href={`/viewer/${document.id}`}>
      <div className="card-hover p-6 flex flex-col h-full cursor-pointer hover:shadow-lg transition-all duration-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <File className="w-6 h-6 text-primary" />
          </div>
          <div className="relative">
            <button
              onClick={(e) => {
                e.preventDefault()
                setShowMenu(!showMenu)
              }}
              className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
            {showMenu && (
              <div className="absolute right-0 top-full mt-1 w-32 bg-card border border-border rounded-lg shadow-lg z-10">
                <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors rounded-t-lg">
                  Open
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors">
                  Share
                </button>
              </div>
            )}
          </div>
        </div>

        <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{document.name}</h3>

        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{document.type}</span>
            <span className="text-muted-foreground">{document.size}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">{document.date}</p>
        </div>
      </div>
    </Link>
  )
}
