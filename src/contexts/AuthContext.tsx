import { createContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

import type { UserApiResponse, Session } from "../dtos/user"

type AuthContextType = {
  session: Session | null
  save: (data: UserApiResponse) => void
}

const LOCAL_STORAGE_KEY = "@helpdesk"

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)

  function save(data: UserApiResponse) {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.userWithoutPassword))
    localStorage.setItem(`${ LOCAL_STORAGE_KEY}:token`, data.token)

    const sessionFormatted: Session = {
      token: data.token,
      user: data.userWithoutPassword,
    }    

    setSession(sessionFormatted)
  }

  function loadUser(){
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`)
    const token = localStorage.getItem(`${ LOCAL_STORAGE_KEY}:token`)

    if(token && user){
      setSession({
        token,
        user:JSON.parse(user)
      })
    }
  }

  useEffect(() => {
    loadUser()
  }, [])


  return (
    <AuthContext.Provider value={{ session, save }}>
      {children}
    </AuthContext.Provider>
  )
}
