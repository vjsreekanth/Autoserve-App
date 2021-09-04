import React from 'react';
import {Card, Button} from 'react-bootstrap'

const AppointmentDetails = (props) => {

    const { appointment, setRerender } = props

    return(
                <>
                    <Card>
                        {/* <Card.Header as="h5">Customer:{appointment.customer}</Card.Header> */}
                        <Card.Body>
                            <Card.Title as="h6">Appointment Date: {new Date(appointment.start_time).toLocaleString()}</Card.Title>
                            <Card.Text>
                                Status: {appointment.status}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>

    )
}

export default AppointmentDetails