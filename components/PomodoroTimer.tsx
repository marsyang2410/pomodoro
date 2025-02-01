"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "./Button"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"
import { TaskInput } from "./TaskInput"

interface PomodoroTimerProps {
  taskName: string
  onTaskSubmit: (task: string) => void
  onTimerStateChange: (isActive: boolean) => void
}

export const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ taskName, onTaskSubmit, onTimerStateChange }) => {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      setIsActive(false)
      onTimerStateChange(false)
      toast({
        title: "Time's up!",
        description: `Completed task: ${taskName}`,
        duration: 3000,
        className: "bg-green-50 border-green-200 text-green-800",
      })
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, time, taskName, toast, onTimerStateChange])

  const toggleTimer = () => {
    if (!taskName.trim()) {
      toast({
        variant: "destructive",
        title: "Task Required",
        description: "Please enter a task name before starting the timer.",
        duration: 3000,
      })
      return
    }
    const newState = !isActive
    setIsActive(newState)
    onTimerStateChange(newState)
  }

  const resetTimer = () => {
    if (isActive) {
      toast({
        variant: "destructive",
        description: "Cannot reset while timer is running.",
      })
      return
    }
    setIsActive(false)
    onTimerStateChange(false)
    setTime(25 * 60)
    onTaskSubmit("") // Clear the task input
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl sm:text-9xl font-light tracking-tighter mb-8 text-gray-800 text-center">
        {formatTime(time)}
      </div>
      <div className="w-full mb-6">
        <TaskInput onTaskSubmit={onTaskSubmit} disabled={isActive} initialValue={taskName} />
      </div>
      <div className="space-y-4 w-full">
        {!taskName.trim() && (
          <Alert variant="info" className="mb-4">
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              <AlertDescription>Enter a task name before starting the timer</AlertDescription>
            </div>
          </Alert>
        )}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button
            onClick={toggleTimer}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg h-12"
          >
            {isActive ? "Pause" : "Start"}
          </Button>
          <Button onClick={resetTimer} variant="outline" className="flex-1 text-lg h-12" disabled={isActive}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}
