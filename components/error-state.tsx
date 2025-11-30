"use client"

import { AlertTriangle } from "lucide-react"

interface ErrorStateProps {
  title: string
  message: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function ErrorState({ title, message, action }: ErrorStateProps) {
  return (
    <div className="card-hover p-8 text-center">
      <div className="w-16 h-16 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4">
        <AlertTriangle className="w-8 h-8 text-destructive" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{message}</p>
      {action && (
        <button onClick={action.onClick} className="btn-primary">
          {action.label}
        </button>
      )}
    </div>
  )
}
