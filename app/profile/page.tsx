"use client"

import { useState } from "react"
import { Button } from "@/components/Button"
import { Input } from "@/components/ui/input"

export default function Profile() {
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john@example.com")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement profile update logic
    console.log("Profile update:", { name, email })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-12" style={{ paddingTop: "24%", paddingBottom: "24%" }}>
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-lg h-12 rounded-xl"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-lg h-12 rounded-xl"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg h-12"
            >
              Update Profile
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

