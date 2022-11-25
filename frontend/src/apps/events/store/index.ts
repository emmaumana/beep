import axios, { AxiosError } from 'axios'
import { beepApi } from '@/services'
import { defineStore } from 'pinia'

import type { SingleEventDetail, SingleEvent, SingleEventUpdate, SingleEventCreate } from '../interfaces'

interface EventState {
  event: SingleEventDetail | null,
  events: SingleEvent[],
  isCreateFormOpen: boolean
}

export const useEventStore = defineStore('events', {
  state: (): EventState => ({
    event: null,
    events: [],
    isCreateFormOpen: false
  }),

  actions: {
    async fetchSingleEvent(id:number): Promise<SingleEventDetail | AxiosError> {
      const response = await beepApi.Events.fechEvent(id)
      if( !response || axios.isAxiosError(response) ) return new AxiosError

      this.event = response
      return response
    },

    async fetchEvents() {
      const responseData = await beepApi.Events.fechEvents()
      if( axios.isAxiosError(responseData) ) return responseData.response?.status

      this.events = responseData
      return responseData
    },

    async addEvent(data:SingleEventCreate) {
      const responseData = await beepApi.Events.fechEvents()
      if( axios.isAxiosError(responseData) ) return responseData.response?.status

      this.events = responseData
      return responseData
    },

    async updateEvent(id:number, updatedData:SingleEventUpdate) {
      const responseData = await beepApi.Events.updateEvent(id, updatedData)

      if( axios.isAxiosError(responseData) ) return responseData.response?.status

      const event = this.events.filter(event => event.id === id)[0]

      if(event) {
        for (const key of Object.keys(updatedData)) {
          
          if( key.includes('attendees') || key.includes('likes') ) {
            if( key === 'attendees' && updatedData.attendees) {
              event.attendees = responseData.attendees
            }
            if( key === 'likes' && updatedData.likes) {
              event.likes = responseData.likes
            }
          } else {
            Object.assign(event, responseData)
          }
        }
      }

      return event
    },

    toggleEventCreateForm():void {
      this.isCreateFormOpen = !this.isCreateFormOpen
    }
  },

  getters: {}
})
