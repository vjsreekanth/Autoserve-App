import React from 'react';

import { ListGroup } from 'react-bootstrap';

import ServiceRequestDetails from './ServiceRequestDetails';


export const ServiceRequestIndexPage = ({setRerender, currentUser, ServiceRequests}) => {
   
    

    
  
 
    return(
        <main id="serviceRequests">
            <h2 style={{ backgroundColor: 'lightblue'}}>MY SERVICE REQUESTS</h2>
            <ListGroup>
                {ServiceRequests&&ServiceRequests.map((serviceRequest, id)=> (
                <ListGroup.Item style={{margin: "1vh 0", border:"0"}}>
                    <ServiceRequestDetails key={id} serviceRequest={serviceRequest} setRerender={setRerender} currentUser={currentUser}/>
                </ListGroup.Item>
               
                ))}
            </ListGroup>

        </main>
    )
 }
 
