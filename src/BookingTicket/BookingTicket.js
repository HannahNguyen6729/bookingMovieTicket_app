import React, { Component } from "react";
import "./BookingTicket.css";
import SeatInfo from "./SeatInfo";
import SeatSelection from "./SeatSelection";
import data from '../Data/seatSelection.json';

export default class BookingTicket extends Component {
  render() {
    return (
      <div
        className=" text-center text-white"
        style={{
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
          width: "100%",
          height: "100%",
          position: "",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100%",
            position: "",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-7">
                  <SeatSelection data={data}/>
              </div>
              <div className="col-5">
                  <SeatInfo/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
