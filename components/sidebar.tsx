"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, Upload, FileText, Settings, Menu, LogOut } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/upload", label: "Upload", icon: Upload },
    { href: "/viewer/1", label: "My Documents", icon: FileText },
    { href: "/settings", label: "Settings", icon: Settings },
  ]

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

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
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 lg:hidden p-2 hover:bg-muted rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 fixed lg:relative h-screen z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">DA</span>
            </div>
            <div>
              <h1 className="font-bold text-sidebar-foreground">DocAnalyzer</h1>
              <p className="text-xs text-sidebar-accent">AI Assistant</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/20"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border space-y-3">
          <button
            onClick={handleLogoutClick}
            className="w-full px-4 py-3 flex items-center gap-3 text-sidebar-foreground hover:bg-sidebar-accent/20 rounded-lg transition-colors font-medium"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-20 lg:hidden" />}

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
