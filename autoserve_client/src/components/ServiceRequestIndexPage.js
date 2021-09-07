import React from 'react';

import { ListGroup } from 'react-bootstrap';

import ServiceRequestDetails from './ServiceRequestDetails';


export const ServiceRequestIndexPage = ({setRerender, currentUser, ServiceRequests}) => {
   
    

    
  
 
    return(
        <main>
            <h1 style={{ backgroundColor: 'lightgoldenrodyellow'}}>Service Requests</h1>
            <ListGroup>
                {ServiceRequests&&ServiceRequests.map((serviceRequest, id)=> (
                <ListGroup.Item>
                    <ServiceRequestDetails key={id} serviceRequest={serviceRequest} setRerender={setRerender} currentUser={currentUser}/>
                </ListGroup.Item>
               
                ))}
            </ListGroup>

        </main>
    )
 }
 
