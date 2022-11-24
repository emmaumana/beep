import type { UserEndpointsInterface } from "../interfaces"

const apiURL: string = import.meta.env.BEEP_API_URL

export const UserEndpoints: UserEndpointsInterface = {
  fechUser: (id) => `${ apiURL }/users/${ id }/`,
  fechUsers: () => `${ apiURL }/users/`,
}
