import { SessionLog } from "@/components/SessionLog"

const mockSessions = [
  { id: 1, date: "2023-05-01", duration: 25, task: "Project Planning" },
  { id: 2, date: "2023-05-01", duration: 25, task: "Email Management" },
  { id: 3, date: "2023-05-02", duration: 25, task: "Code Review" },
]

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-12" style={{ paddingTop: "24%", paddingBottom: "24%" }}>
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Dashboard</h1>
          <div className="w-full">
            <SessionLog sessions={mockSessions} />
          </div>
        </div>
      </div>
    </main>
  )
}

