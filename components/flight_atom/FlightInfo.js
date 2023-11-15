import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Luggage from './Luggage';
import FlightDetails from './FlightDetails';

const FlightInfo = () => {
    const [key, setKey] = useState('info');
    return (
        <>
            <div className='flight-information'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="info" title="Flight Information">
                      <FlightDetails/>
                    </Tab>
                    <Tab eventKey="Fare Summary" title="Fare Summary">
                        <div className='tab-content'>
                            <h5>Fare Breakup</h5>
                            <div className='breakup'>
                                <div className=' price-divide d-flex '>
                                    <div className='price-span d-flex flex-column'>
                                        <h6>Total</h6>
                                        <span>Base Fare</span>
                                        <span>Surcharges</span>
                                    </div>
                                    <div className='price-list d-flex flex-column'>
                                        <h6>$600</h6>
                                        <span>$529</span>
                                        <span>$71</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Tab>
                  
                    <Tab eventKey="Luggage Info " title="Luggage Info ">
                       <Luggage/>
                    </Tab>
                </Tabs>
            </div>


        </>
    )
}

export default FlightInfo