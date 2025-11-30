"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { Settings, Moon, Sun, LogOut } from "lucide-react"
import Link from "next/link"
import { useTheme } from "@/lib/theme-context"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface HeaderProps {
  title: string
  children?: React.ReactNode
}

export function Header({ title, children }: HeaderProps) {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const handleLogoutClick = () => {
    setShowLogoutModal(true)
  }

  const handleConfirmLogout = () => {
    localStorage.removeItem("isLoggedIn")
    setShowLogoutModal(false)
    router.push("/login")
  }

  return (
    <>
      <header className="border-b border-border bg-card">
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>

          <div className="flex items-center gap-4">
            {children}

            <div className="flex items-center gap-2 pl-4 border-l border-border">
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Link
                href="/settings"
                className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
              >
                <Settings className="w-5 h-5" />
              </Link>

              <button
                onClick={handleLogoutClick}
                className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Dialog open={showLogoutModal} onOpenChange={setShowLogoutModal}>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Confirm logout</DialogTitle>
            <DialogDescription>Are you sure you want to logout?</DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <button onClick={() => setShowLogoutModal(false)} className="btn-ghost flex-1 sm:flex-none">
              Cancel
            </button>
            <button
              onClick={handleConfirmLogout}
              className="btn-primary flex-1 sm:flex-none bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              Yes, Logout
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
