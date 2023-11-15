import React from 'react'

const Luggage = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 luggage-box'>
                <img src='images/airasia.png'/>
                <span className='flight-info-bold'>15-789</span>
                <p className='ticket-date'>Operated By Air Asia</p>
            </div>
            <div className='col-md-4 luggage-box'>
            <i class="fa-solid fa-briefcase"></i>
            <span className='flight-info-bold'>Cabin-Baggage</span>
            <p className='ticket-date'>7 Kg Per Person</p>
            </div>
            <div className='col-md-4 luggage-box'>
            <i class="fa-solid fa-cart-flatbed-suitcase"></i>
            <span className='flight-info-bold'>Check-In-Baggage</span>
            <p className='ticket-date'>15 Kg Per Person</p>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Luggage