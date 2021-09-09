import React from 'react';
import { ListGroup } from 'react-bootstrap';
import AppointmentDetails from './AppointmentDetails';





export const AppointmentIndexPage = ({appointments, setRerender, currentUser}) => {
    
    return(
        <main id="appointments">
            <h1 style={{ backgroundColor: 'lightblue'}}> MY APPOINTMENTS</h1>
            <ListGroup>
                {appointments&&appointments.map((appointment, id)=> (
                <ListGroup.Item style={{margin: "1vh 0", border:"0"}}>
                    <AppointmentDetails key={id} appointment={appointment} setRerender={setRerender} currentUser={currentUser} />

                </ListGroup.Item>
               
                ))}
            </ListGroup>

           

        </main>
    )
 }
 
