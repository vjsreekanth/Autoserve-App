import React from 'react';
import { ListGroup } from 'react-bootstrap';

import ServiceOfferDetails from './ServiceOfferDetails';


export const ServiceOfferIndexPage = ({setRerender, ServiceOffers, currentUser}) => {
    
    

    

   
   
    
    return(
        <main id="serviceOffers">
            <h2  style={{ backgroundColor: 'lightblue'}}>SERVICE OFFERS</h2>
            <ListGroup>
                {ServiceOffers&&ServiceOffers.map((serviceOffer, id)=> (
                <ListGroup.Item style={{margin: "1vh 0", border:"0"}}>
                    <ServiceOfferDetails key={id} serviceOffer={serviceOffer} setRerender={setRerender} currentUser={currentUser} />
                </ListGroup.Item>
               
                ))}
            </ListGroup>
        </main>
    )
 }
 
