import React from 'react';
import { ListGroup } from 'react-bootstrap';
import AppointmentDetails from './AppointmentDetails';





export const AppointmentIndexPage = ({appointments, setRerender, currentUser}) => {
    
    return(
        <main>
            <h1 style={{ backgroundColor: 'lightgoldenrodyellow'}}>Appointments</h1>
            <ListGroup>
                {appointments&&appointments.map((appointment, id)=> (
                <ListGroup.Item>
                    <AppointmentDetails key={id} appointment={appointment} setRerender={setRerender} currentUser={currentUser} />

                </ListGroup.Item>
               
                ))}
            </ListGroup>

           

        </main>
    )
 }
 
