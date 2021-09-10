import React from 'react';
import {Card, Button, Badge} from 'react-bootstrap'
import { Appointment } from '../requests';
import moment from 'moment';

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

    console.log(appointment)

    return(
                <>
                    <Card className="shadow">
                    {/* {currentUser.is_mechanic&&
                        <Card.Header as="h5"> Service Appointment with {appointment.customer}</Card.Header> }
                        {!currentUser.is_mechanic&&
                        <Card.Header as="h5"> Service Appointment for{appointment.service_vehicle.title}</Card.Header> } */}
                        

                        <Card.Body style={{ textAlign: "start"}}>
                        
         
                            {currentUser.is_mechanic?
                            <>
                            <Card.Title>Customer Details</Card.Title>
                            <Card.Text>Name: {appointment.customer.full_name}</Card.Text>
                            <Card.Text>Email: {appointment.customer.email}</Card.Text>
                            <Card.Text>Phone: {appointment.customer.phone}</Card.Text>
                            <Card.Text>Vehicle: {appointment.service_vehicle.title}</Card.Text>
                            <Card.Text>Service request: {appointment.service_request.title}</Card.Text>
                            <Card.Text>Appointment Date: {moment(appointment.start_time).format('LLLL')}</Card.Text>
                              
                            <Card.Text>
                                <Button className="mt-2" as="div" variant={handleStatus(appointment)}size="md">
                                   Status: {appointment.status.toUpperCase()}
                                </Button>
                            </Card.Text>
                         
                            <Button disabled={appointment.status === "approved" || appointment.status === "denied" || appointment.status === "cancelled"} variant="success" className="btn-sm me-2" onClick={() => changeStatus(appointment.id, 'approved')}>{ appointment.status==="approved"? "Appointment Approved":"Approve Appointment"}</Button> 
                            <Button disabled={appointment.status === "approved" || appointment.status === "denied" || appointment.status === "cancelled"} variant="danger" className="btn-sm" onClick={() => changeStatus(appointment.id, 'denied')}>Deny</Button>
                            </> 
                            : 
                                <>
                                <Card.Title>Appointment Details</Card.Title>
                                <Card.Text>Vehicle: {appointment.service_vehicle.title}</Card.Text>
                                <Card.Text>Service request: {appointment.service_request.title}</Card.Text>
                                <Card.Text>Appointment Date: {moment(appointment.start_time).format('LLLL')}</Card.Text>
                                <Card.Text>Delivery Date: {moment(appointment.service_offer.delivery_date).format('LLLL')}</Card.Text>
                                <Card.Title>Service Provider Details</Card.Title>
                                 <Card.Text>{appointment.mechanic.full_name}</Card.Text>
                                 <Card.Text>{appointment.mechanic.email}</Card.Text>
                                 <Card.Text>{appointment.mechanic.phone}</Card.Text>
                                 <Card.Text>
                                <Button className="mt-2" as="div" variant={handleStatus(appointment)}size="md">
                                   Status: {appointment.status.toUpperCase()}
                                </Button>
                            </Card.Text>
                              <Button disabled={appointment.status === "denied" || appointment.status === "cancelled" } variant="danger" className="btn-sm me-2" onClick={() => changeStatus(appointment.id, 'cancelled')}>Cancel</Button> 
                            
                              </>
                            }
                            
                        </Card.Body>
                    </Card>
                </>

    )
}

export default AppointmentDetails

                        