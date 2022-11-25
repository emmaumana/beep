import { AxiosError } from 'axios'
import { api } from '@/services/api'
import { EventEndpoints } from './endpoints'

import type { SingleEvent, SingleEventCreate, SingleEventDetail, SingleEventUpdate } from '../interfaces'


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

  postEvent: async (eventData:SingleEventCreate): Promise<AxiosError<unknown, any> | SingleEventDetail> => {
    try {
      const apiCall = await api.post<SingleEventDetail>(EventEndpoints.eventsEndpoint(), eventData)
      return apiCall.data
    } catch (error) {
      return error as AxiosError
    }
  },

  updateEvent: async (id:number, updatedData:SingleEventUpdate): Promise<SingleEventDetail | AxiosError<unknown, any>> => {
    try {
      const apiCall = await api.patch<SingleEventDetail>(EventEndpoints.eventEndpoint(id), updatedData)
      return apiCall.data
    } catch (error) {
      return error as AxiosError
    }
  },

  deleteEvent: async (id:number): Promise<AxiosError<unknown, any> | SingleEventDetail> => {
    try {
      const apiCall = await api.delete<SingleEventDetail>(EventEndpoints.eventEndpoint(id))
      return apiCall.data
    } catch (error) {
      return error as AxiosError
    }
  },
}
