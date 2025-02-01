import type React from "react"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface TaskInputProps {
  onTaskSubmit: (task: string) => void
  disabled?: boolean
  initialValue?: string
}

export const TaskInput: React.FC<TaskInputProps> = ({ onTaskSubmit, disabled, initialValue = "" }) => {
  const [task, setTask] = useState(initialValue)

  useEffect(() => {
    setTask(initialValue)
  }, [initialValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTask = e.target.value
    setTask(newTask)
    onTaskSubmit(newTask) // Update parent component immediately
  }

  return (
    <div className="w-full">
      <Input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="What are you working on?"
        className="w-full text-lg h-12 rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-center"
        disabled={disabled}
      />
    </div>
  )
}

