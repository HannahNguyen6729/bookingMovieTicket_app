import React, { Component } from "react";
import { connect } from "react-redux";
import { bookingTicket } from "../TicketRedux/actions/BookingTicketActions";

class SeatSelection extends Component {
 
  renderSeatRow = () => {
    return this.props.data.map((item, index) => (
      <div key={index} className="my-2">
        <button className="rowNumber"> {item.row}</button>
        {item.seatList.map((seat, i) => {
          let disabled = false;
          let cssBookedSeat = "";
          if (seat.booked) {
            disabled = true;
            cssBookedSeat = "bookedSeat";
          }
          let cssBooking = "";
          let indexCss = this.props.list.findIndex((item) => (item.seatNumber===seat.seatNumber));
          if(indexCss !== -1){
            cssBooking ='bookingSeat';
          }
          return (
            <button
              key={i}
              className={`seat ${cssBookedSeat} ${cssBooking} `}
              disabled={disabled}
              onClick={() => {
                this.props.bookingTicket(seat);
              }}
              style={ index === 0
                ? {
                    color: "yellow",
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "20px",
                  }
                : {}}
            >
              {seat.seatNumber}
            </button>
          );
        })}
      </div>
    ));
  };
  render() {
    return (
      <div>
        <div className="text-white text-center d-flex align-items-center flex-column bookingMovie">
          <h1 className="my-4 text-warning">Choose your seats</h1>
          <h4 className="mb-4 text-warning">Screen</h4>
          <div className="screen"> </div>
        </div>
        <div className="text-center mb-5">{this.renderSeatRow()}</div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    bookingTicket: (payload) => {
      dispatch(bookingTicket(payload))
    },
  };
};
const mapStateToProps = (state) =>{
  return{ 
    list: state.ticket.bookedSeatList,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SeatSelection);
