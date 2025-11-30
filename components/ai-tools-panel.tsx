"use client"

import { useState } from "react"
import { Send, FileText, HelpCircle, BookOpen, Edit3, MessageSquare } from "lucide-react"

interface AIToolsPanelProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function AIToolsPanel({ activeTab, setActiveTab }: AIToolsPanelProps) {
  const [messages, setMessages] = useState<Array<{ id: number; type: "user" | "ai"; text: string }>>([])
  const [input, setInput] = useState("")

  const tabs = [
    { id: "summary", label: "Summary", icon: FileText },
    { id: "mcqs", label: "MCQs", icon: HelpCircle },
    { id: "qa", label: "Q&A", icon: MessageSquare },
    { id: "glossary", label: "Glossary", icon: BookOpen },
    { id: "notes", label: "Notes", icon: Edit3 },
  ]

  const handleSendMessage = () => {
    if (!input.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: "user" as const,
      text: input,
    }
    setMessages([...messages, newMessage])
    setInput("")
  }

  return (
    <div className="w-96 flex flex-col card-hover overflow-hidden shadow-lg">
      {/* Tabs */}
      <div className="flex border-b border-border overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {activeTab === "summary" && (
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">Summary will appear here...</p>
            </div>
          </div>
        )}

        {activeTab === "mcqs" && (
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">Multiple choice questions will appear here...</p>
            </div>
          </div>
        )}

        {activeTab === "qa" && (
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-3 rounded-lg ${
                  msg.type === "user"
                    ? "bg-primary text-primary-foreground ml-4"
                    : "bg-muted text-muted-foreground mr-4"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            ))}
            {messages.length === 0 && (
              <div className="p-4 bg-muted rounded-lg border border-border">
                <p className="text-sm text-muted-foreground italic">Ask questions about your document...</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "glossary" && (
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg border border-border">
              <p className="text-sm font-medium text-foreground">Key Terms</p>
              <p className="text-sm text-muted-foreground mt-1 italic">Glossary will appear here...</p>
            </div>
          </div>
        )}

        {activeTab === "notes" && (
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg border border-border">
              <p className="text-sm text-muted-foreground italic">Your notes will appear here...</p>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      {activeTab === "qa" && (
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask a question..."
              className="input-field flex-1"
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
