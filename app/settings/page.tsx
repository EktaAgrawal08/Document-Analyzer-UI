"use client"

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header title="Settings" />

        <div className="flex-1 overflow-auto">
          <div className="p-6 max-w-3xl mx-auto">
            {/* Appearance Section */}
            <div className="card-hover p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Appearance</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {theme === "dark" ? (
                      <Moon className="w-5 h-5 text-primary" />
                    ) : (
                      <Sun className="w-5 h-5 text-primary" />
                    )}
                    <div>
                      <p className="font-medium text-foreground">Dark mode</p>
                      <p className="text-sm text-muted-foreground">{theme === "dark" ? "Enabled" : "Disabled"}</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className={`w-12 h-6 rounded-full transition-colors ${theme === "dark" ? "bg-primary" : "bg-muted"}`}
                  >
                    <div
                      className={`w-5 h-5 bg-card rounded-full transition-transform ${
                        theme === "dark" ? "translate-x-6" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Section */}
            <div className="card-hover p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Profile</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input type="text" placeholder="Your name" className="input-field" disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" className="input-field" disabled />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
