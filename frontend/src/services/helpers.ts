import axios, { AxiosError } from 'axios'
import { User } from '@/apps/users/interfaces'

const loadCurrentUser = (): User | null => {
  return JSON.parse(localStorage.getItem('currentUser') as string)
}

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message
  return String(error)
}

export { loadCurrentUser, getErrorMessage }
