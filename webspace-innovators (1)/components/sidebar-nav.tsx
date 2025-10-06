"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavItem {
  id: string
  label: string
  number: string
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", number: "01" },
  { id: "about", label: "About", number: "02" },
  { id: "team", label: "Team", number: "03" },
  { id: "tech", label: "Technologies", number: "04" },
]

export function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden text-foreground"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={`fixed left-0 top-0 h-full w-20 border-r border-border bg-background z-40 flex flex-col items-center py-12 transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex flex-col items-center gap-2 py-8 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-xs font-mono">{item.number}</span>
            <div className="w-px h-12 bg-border group-hover:bg-primary transition-colors" />
            <span className="text-xs [writing-mode:vertical-lr] rotate-180">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
