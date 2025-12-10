import { createContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

import type { UserApiResponse, Session } from "../dtos/user"

type AuthContextType = {
  session: Session | null
  save: (data: UserApiResponse) => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)

  function save(data: UserApiResponse) {
    const sessionFormatted: Session = {
      token: data.token,
      user: data.userWithoutPassword,
    }

    setSession(sessionFormatted)
  }

  useEffect(() => {
    console.log("🔁 SESSION ATUALIZADA:", session)
  }, [session])

  return (
    <AuthContext.Provider value={{ session, save }}>
      {children}
    </AuthContext.Provider>
  )
}
