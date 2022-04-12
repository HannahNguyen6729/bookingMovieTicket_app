import { BOOKING_TICKET, CANCEL_TICKET } from "../types/BookingTicketTypes"

export const bookingTicket = (payload) => {
    return {
        type: BOOKING_TICKET,
        payload
    }
}
export const cancelTicket= (payload) => {
    return{
        type: CANCEL_TICKET,
        payload
    }
}
