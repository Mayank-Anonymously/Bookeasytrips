import Stop from '../components/FlightResult/Stop'
import React from 'react'

const ticketresult = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
<div className='col-md-3'>
<Stop/>
</div>
<div className='col-md-9 d-flex justify-content-between'>
   
    <div className='flight-img'>
        <img src='images/airasia.png'/>
        <p>15-789 Economy</p>
    </div>
    <div className='time-location text-center'>
        <span className='badge location-badge'>DEL</span>
        <p className='ticket-time'>2:00 PM</p>
        <span className='ticket-date'>14 Nov'2023</span>
    </div>
    <div className='flight-svg text-center'>
    <i class="fa-solid fa-plane fa-fade"></i>
    <p className='ticket-time'>14h:30m</p>
        <span className='ticket-stop-span'>Two Stop</span>
    </div>
    <div className='time-location text-center'>
        <span className='badge location-badge'>Bom</span>
        <p className='ticket-time'>4:30 AM</p>
        <span className='ticket-date'>15 Nov'2023</span>
    </div>
    <div className='price-buy'>
        <span className='price-span'>Price</span>
        <p className='price-tag'>9276.00</p>
        <button className='book-btn'>Book Now</button>
    </div>


</div>

        </div>
    </div>
    
    </>
  )
}

export default ticketresult