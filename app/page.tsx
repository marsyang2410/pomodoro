"use client"

import { useState } from "react"
import { PomodoroTimer } from "@/components/PomodoroTimer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [currentTask, setCurrentTask] = useState("")
  const [isTimerActive, setIsTimerActive] = useState(false)

  const handleTaskSubmit = (task: string) => {
    setCurrentTask(task)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 bg-gray-50">
      <div
        className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6 sm:p-12"
        style={{ paddingTop: "24%", paddingBottom: "24%" }}
      >
        <PomodoroTimer taskName={currentTask} onTaskSubmit={handleTaskSubmit} onTimerStateChange={setIsTimerActive} />
      </div>
      <Toaster />
    </main>
  )
}

