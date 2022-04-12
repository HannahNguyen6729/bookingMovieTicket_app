import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelTicket } from "../TicketRedux/actions/BookingTicketActions";
class SeatInfo extends Component {
  renderRow = () => {
    return this.props.seatList.map((seat, index) => (
      <tr key={index}>
        <td scope="row">{seat.seatNumber}</td>
        <td>{seat.price}</td>
        <td className="text-danger font-weight-bold"
            style={{cursor: 'pointer'}}
            onClick={()=>{this.props.dispatch(cancelTicket(seat.seatNumber))}}
        >X</td>
      </tr>
    ));
  };
  renderTotalPrice =()=>{
    return this.props.seatList.reduce((total, curr, index)=> (total+= curr.price), 0)
  };
  render() {
    return (
      <div className="">
        <h1 className="my-4 bookingMovie">Your seats</h1>
        <div className="text-left my-5 bookingMovie" style={{ fontSize: 20 }}>
          <div>
            <button className="bookedSeat"></button> <span>Booked seat</span>
          </div>
          <div>
            <button className="bookingSeat"></button> <span>Booking seat</span>
          </div>
          <div>
            <button className="seat"></button> <span>Available seat</span>
          </div>
        </div>
        <div>
          <table
            className="table table-bordered text-white text-left"
            style={{ fontSize: 20, fontWeight: "0" }}
          >
            <thead>
              <tr className="text-warning">
                <th>Seat Number</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRow()}
              <tr>
                <th scope="row" className="text-warning">
                  Total price
                </th>
                <th colSpan="2" className="text-warning">{this.renderTotalPrice()}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    seatList: state.ticket.bookedSeatList,
  };
};
// const mapDispatchToProps = (dispatch) =>{
//   return {
//     cancelTicket: (payload) =>{
//       dispatch(cancelTicket(payload))
//     }
//   }
// }
export default connect(mapStateToProps)(SeatInfo);
