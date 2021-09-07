import React from 'react';
import {Card, Button} from 'react-bootstrap'
import { Appointment } from '../requests';

const AppointmentDetails = (props) => {

    const {appointment, setRerender, currentUser } = props

    const changeStatus = (id, status) => {
        Appointment.update(id, {status}).then(res =>{
          setRerender();
        })
      }
      const handleStatus = (appointment) => {
        const obj = {
          'approved': 'success',
          'pending': 'warning',
          'denied': 'danger',
          'cancelled': "dark"

        }
        
        return appointment?.status ? obj[appointment.status] : ''
      }

    

    return(
                <>
                    <Card>
                        {/* <Card.Header as="h5">Customer:{appointment.customer}</Card.Header> */}
                        <Card.Body>
                          <Card.Title as="span">Appointment Date: {new Date(appointment.start_time).toLocaleDateString()}</Card.Title>
                          <Card.Title className="ms-2" as="span">Time: {new Date(appointment.start_time).toLocaleTimeString()}</Card.Title>
                           <Card.Title></Card.Title>
                            <Card.Text>
                                <Button className="mt-2" as="div" variant={handleStatus(appointment)}size="md">
                                   Status: {appointment.status.toUpperCase()}
                                </Button>
                            </Card.Text>
                            {currentUser.is_mechanic?
                            <>
                         
                            <Button disabled={appointment.status === "approved" || appointment.status === "denied" || appointment.status === "cancelled"} variant="success" className="btn-sm mx-2" onClick={() => changeStatus(appointment.id, 'approved')}>{ appointment.status==="approved"? "Appointment Approved":"Approve Appointment"}</Button> 
                            <Button disabled={appointment.status === "approved" || appointment.status === "denied" || appointment.status === "cancelled"} variant="danger" className="btn-sm" onClick={() => changeStatus(appointment.id, 'denied')}>Deny</Button>
                            </> 
                            : 
                                <>
                              <Button disabled={appointment.status === "denied" || appointment.status === "cancelled" } variant="danger" className="btn-sm mx-2" onClick={() => changeStatus(appointment.id, 'cancelled')}>Cancel</Button> 
                              </>
                            }
                            
                        </Card.Body>
                    </Card>
                </>

    )
}

export default AppointmentDetails

                        