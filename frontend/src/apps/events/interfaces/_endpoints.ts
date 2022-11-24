export interface EventEndpointsInterface {
  eventEndpoint: (id: number) => string
  eventsEndpoint: () => string
}
