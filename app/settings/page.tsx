"use client"

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

export default function SettingsPage() {

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header title="Settings" />

        <div className="flex-1 overflow-auto">
          <div className="p-6 max-w-3xl mx-auto">
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
