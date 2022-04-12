import { BOOKING_TICKET, CANCEL_TICKET } from "../types/BookingTicketTypes";

const stateDefault = {
  bookedSeatList: [],
};

const ticketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case BOOKING_TICKET: {
      let updateList = [...state.bookedSeatList]
      let index = updateList.findIndex(item => item.seatNumber === action.payload.seatNumber)
      if(index !== -1) {
        updateList.splice(index,1);
      }else{
        updateList.push(action.payload);
      }
      state.bookedSeatList = updateList;
      return { ...state };
    }
    case CANCEL_TICKET:{
      let updateList = [...state.bookedSeatList];
      let i = updateList.findIndex(item => item.seatNumber===action.payload);
      if(i !== -1){
        updateList.splice(i,1);
      }
      state.bookedSeatList= updateList;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default ticketReducer;
