import type { EventEndpointsInterface } from "../interfaces"

const ApiURL: string = import.meta.env.BEEP_API_URL

export const EventEndpoints: EventEndpointsInterface = {
  eventEndpoint: (id) => `${ ApiURL }/events/${ id }/`,
  eventsEndpoint: () => `${ ApiURL }/events/`,
}
