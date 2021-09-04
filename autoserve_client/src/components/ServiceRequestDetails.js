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
        <main>
            <Card>
                <Card.Header as="h5">{serviceRequest.title}</Card.Header>
                <Card.Body>
                    <Card.Title as="h6">Appointment Date: {new Date(serviceRequest.appointment_date).toLocaleString()}</Card.Title>
                    <Card.Text>
                        {serviceRequest.description}
                    </Card.Text>
                        {currentUser.is_mechanic&&

                    <Button variant="primary" onClick={()=>{setShowModal(true); setServiceRequestId(serviceRequest.id)}}>Create Service Offer</Button>
                            }
                </Card.Body>
            </Card>
            <CreateServiceOfferModal show={showModal} handleClose={handleClose} serviceRequestId={serviceRequestId} />    
        </main>
    )
}

export default ServiceRequestDetails