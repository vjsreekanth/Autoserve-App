import React from 'react';
import { ListGroup } from 'react-bootstrap';
import AppointmentDetails from './AppointmentDetails';





export const AppointmentIndexPage = ({appointments, setRerender}) => {
    
    return(
        <main>
            <h1>Appointments</h1>
            <ListGroup>
                {appointments&&appointments.map((appointment, id)=> (
                <ListGroup.Item>
                    <AppointmentDetails key={id} appointment={appointment} setRerender={setRerender} />

                </ListGroup.Item>
               
                ))}
            </ListGroup>

           

        </main>
    )
 }
 
