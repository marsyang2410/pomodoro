import type React from "react"

interface Session {
  id: number
  date: string
  duration: number
  task: string
}

interface SessionLogProps {
  sessions: Session[]
}

export const SessionLog: React.FC<SessionLogProps> = ({ sessions }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Session Log</h2>
      <ul className="space-y-2">
        {sessions.map((session) => (
          <li key={session.id} className="bg-white p-4 rounded shadow">
            <div className="font-semibold">{session.task}</div>
            <div className="text-sm text-gray-500">
              {session.date} - {session.duration} minutes
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

