import { AxiosError } from 'axios'
import { api } from '@/services/api'
import { EventEndpoints } from './endpoints'

import type { SingleEvent, SingleEventDetail, SingleEventUpdate } from '../interfaces'


export const EventApiModule = {
  fechEvent: async (id:number): Promise<AxiosError<unknown, any> | SingleEventDetail> => {
    try {
      const apiCall = await api.get<SingleEventDetail>(EventEndpoints.eventEndpoint(id))
      return apiCall.data
    } catch (error) {
      return error as AxiosError
    }
  },

  fechEvents: async (): Promise<AxiosError<unknown, any> | SingleEvent[]> => {
    try {
      const apiCall = await api.get<SingleEvent[]>(EventEndpoints.eventsEndpoint())
      return apiCall.data
    } catch (error) {
      return error as AxiosError
    }
  },

  requestUpdate: async (id:number, updatedData:SingleEventUpdate): Promise<SingleEventDetail | AxiosError<unknown, any>> => {
    try {
      const apiCall = await api.patch<SingleEventDetail>(EventEndpoints.eventEndpoint(id), updatedData)
      return apiCall.data
    } catch (error) {
      return error as AxiosError
    }
  }
}
