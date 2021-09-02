import React, {useState, useEffect} from 'react';
import { ListGroup } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';




export const AppointmentIndexPage = ({appointments}) => {
    
    

    


   
    
    return(
        <main>
            <h1>Appointments</h1>
            <ListGroup>
                {appointments&&appointments.map((appointment, index)=> (
                <ListGroup.Item key = {index}>
                    <Card>
                        {/* <Card.Header as="h5">{appointment.customer_id}</Card.Header> */}
                        <Card.Body>
                            <Card.Title as="h6">Appointment Date: {new Date(appointment.start_time).toLocaleString()}</Card.Title>
                            <Card.Text>
                                Status: {appointment.status}
                            </Card.Text>
                          
                         
                        </Card.Body>
                    </Card>

                </ListGroup.Item>
               
                ))}
            </ListGroup>

           

        </main>
    )
 }
 
