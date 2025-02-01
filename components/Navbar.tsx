"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "./Button"

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#FFD700] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link href="/" className="flex items-center">
              <span className="font-semibold text-[#2E3A87] text-xl">Pomodoro App</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="py-2 px-3 text-[#2E3A87] hover:text-[#1E2A77] rounded-md transition duration-300 text-lg"
            >
              Log In
            </Link>
            <Link href="/signup">
              <Button size="lg" className="bg-[#2E3A87] hover:bg-[#1E2A77] text-white text-lg">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-20 text-[#2E3A87]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-[#FFD700] border-b border-[#2E3A87] z-10">
            <div className="flex flex-col space-y-2 px-4 py-4">
              <Link
                href="/login"
                className="py-2 px-4 text-center text-[#2E3A87] hover:text-[#1E2A77] rounded-md transition duration-300 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link href="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#2E3A87] hover:bg-[#1E2A77] text-white text-lg">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

