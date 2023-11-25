import React from 'react'

const FlightDetails = () => {
  return (
    <>
    <div className='container flight-details d-flex'>
        <div className='flight-name'>
            <img src='images/airasia.png'/>
            <p className='flight-info-bold'>15-789 Economy</p>
        </div>
        <div className='from-flight d-flex flex-column'>
            <span className='info-destination'>New Delhi (India)</span>
            <span className='info-time'>5:35 PM</span>
            <span className='info-date'>Nov,14 2023</span>
            <p className='info-dest'>Indira Gandhi International(DEL),<br/> SpiceJet(SG)</p>
        </div>

<div className='flight-dura'>
    <p className='ticket-time'>2h:10m</p>
    <span>Duration</span>
<hr class="br-yellow"/>
</div>

<div className='to-flight d-flex flex-column'>
            <span className='info-destination'>Mumbai (India)</span>
            <span className='info-time'>7:45 PM</span>
            <span className='info-date'>Nov,14 2023</span>
            <p className='info-dest'>Indira Gandhi International(DEL),<br/> SpiceJet(SG)</p>
        </div>


    </div>
    
    
    </>
  )
}

export default FlightDetails