import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import CreateServiceOfferModal from './CreateServiceOfferModal';

const ServiceRequestDetails = (props) => {

    const {serviceRequest, setRerender, currentUser} = props


    const [showModal, setShowModal] = useState(false)
    const [serviceRequestId, setServiceRequestId] = useState(null)

    const handleClose = ()=>{
        setRerender();
        setShowModal(false)
    }
 
    

    return(
        <>
       
            <Card>
                <Card.Header>{serviceRequest.title.toUpperCase()}</Card.Header>
                <Card.Body>
                    <Card.Title >Vehicle Name: {serviceRequest.vehicle} </Card.Title>
                    <Card.Title>Customer Comments</Card.Title>
                    <Card.Text  className="mb-2">{serviceRequest.description}</Card.Text>
                    <Card.Title as="span">Appointment needed on: {new Date(serviceRequest.appointment_date).toLocaleDateString()}</Card.Title>
                    <Card.Title className="ms-2" as="span">Time: {new Date(serviceRequest.appointment_date).toLocaleTimeString()}</Card.Title>
                        {currentUser.is_mechanic&&

                    <Button variant="primary" onClick={()=>{setShowModal(true); setServiceRequestId(serviceRequest.id)}}>Create Service Offer</Button>
                            }
                </Card.Body>
            </Card>
            <CreateServiceOfferModal show={showModal} handleClose={handleClose} serviceRequestId={serviceRequestId} />    
       </>
    )
}

export default ServiceRequestDetails