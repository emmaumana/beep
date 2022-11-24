import date from 'date-and-time'
import jwt_decode from 'jwt-decode'

import type { DecodedTokenInterface } from '@/interfaces/index'



const formatDate = (dateToFormat: string) => {
  const toFormat = new Date(dateToFormat)
  return date.format(toFormat, 'ddd, MMM DD YYYY')
}

const getUserIdFromToken = (token: string): DecodedTokenInterface => jwt_decode(token)

const saveToLocalStorage = (keyName:string, values:any): void => {
  localStorage.setItem(keyName, JSON.stringify(values))
}

const getFromLocalStorage = (keyName:string): any => {
  const item = localStorage.getItem(keyName)
  if(!item) return null
  return JSON.parse(item)
}

const removeFromLocalStorage = (keyName:string): any => {
  localStorage.removeItem(keyName)
}


export { getUserIdFromToken, formatDate, saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage }
