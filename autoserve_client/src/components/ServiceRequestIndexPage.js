import React, {useState} from 'react';

import { ListGroup } from 'react-bootstrap';

import CreateServiceOfferModal from './CreateServiceOfferModal'
import ServiceRequestDetails from './ServiceRequestDetails';


export const ServiceRequestIndexPage = ({setRerender, currentUser, ServiceRequests}) => {
   
    

    
  
 
    return(
        <main>
            <h1>Service Requests</h1>
            <ListGroup>
                {ServiceRequests&&ServiceRequests.map((serviceRequest, id)=> (
                <ListGroup.Item  class="mb-3">
                    <ServiceRequestDetails key={id} serviceRequest={serviceRequest} setRerender={setRerender} currentUser={currentUser}/>
                </ListGroup.Item>
               
                ))}
            </ListGroup>

        </main>
    )
 }
 
