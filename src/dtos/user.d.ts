type UserApiRole = "customer" | "manager" | "technical";


export type User = {
  id: string
  name: string
  email: string
  role: UserApiRole
}

export type UserApiResponse = {
  token: string
  userWithoutPassword: User
}

export type Session = {
  token: string
  user: User
}



