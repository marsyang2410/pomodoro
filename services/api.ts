const API_BASE_URL = "/api"

export const api = {
  signup: async (name: string, email: string, password: string) => {
    // TODO: Implement actual API call
    console.log("Signup:", { name, email, password })
    return { success: true }
  },

  login: async (email: string, password: string) => {
    // TODO: Implement actual API call
    console.log("Login:", { email, password })
    return { success: true, user: { id: "1", name: "John Doe", email } }
  },

  startPomodoro: async (taskName: string) => {
    // TODO: Implement actual API call
    console.log("Start Pomodoro:", { taskName })
    return { success: true, sessionId: "123" }
  },

  endPomodoro: async (sessionId: string) => {
    // TODO: Implement actual API call
    console.log("End Pomodoro:", { sessionId })
    return { success: true }
  },

  getPomodoroHistory: async () => {
    // TODO: Implement actual API call
    return [
      { id: 1, date: "2023-05-01", duration: 25, task: "Project Planning" },
      { id: 2, date: "2023-05-01", duration: 25, task: "Email Management" },
      { id: 3, date: "2023-05-02", duration: 25, task: "Code Review" },
    ]
  },
}

