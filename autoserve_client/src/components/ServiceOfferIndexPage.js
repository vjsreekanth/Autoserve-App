import React from 'react';
import { ListGroup } from 'react-bootstrap';

import ServiceOfferDetails from './ServiceOfferDetails';


export const ServiceOfferIndexPage = ({setRerender, ServiceOffers, currentUser}) => {
    
    

    

   
   
    
    return(
        <main>
            <h1 style={{ backgroundColor: 'lightgoldenrodyellow'}}>Service Offers</h1>
            <ListGroup>
                {ServiceOffers&&ServiceOffers.map((serviceOffer, id)=> (
                <ListGroup.Item>
                    <ServiceOfferDetails key={id} serviceOffer={serviceOffer} setRerender={setRerender} currentUser={currentUser} />
                </ListGroup.Item>
               
                ))}
            </ListGroup>
        </main>
    )
 }
 
