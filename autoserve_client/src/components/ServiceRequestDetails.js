import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import CreateServiceOfferModal from './CreateServiceOfferModal';
import moment from 'moment';

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
       
            <Card className="shadow">
                <Card.Header style={{ backgroundColor: 'lightgrey'}}>{serviceRequest.title.toUpperCase()}</Card.Header>
                <Card.Body style={{ textAlign: "start"}}>
                   
                    <Card.Title >{serviceRequest.customer_name} </Card.Title>
                    <Card.Text >{serviceRequest.vehicle_name} </Card.Text>
                    <Card.Text className="mb-2">Vin: {serviceRequest.vehicle.vin}</Card.Text>
                    <Card.Text >Appointment Needed on: {moment(serviceRequest.appointment_date).format('LLLL')}</Card.Text>
                    <h4>Customer Comments</h4>
                    <Card className="frame mb-2" style={{ Width: 'auto', height: "3rem"}}>
                    
                    <Card.Text  className="p-2">{serviceRequest.description}</Card.Text>

                    </Card>
                        {currentUser.is_mechanic&&

                    <Button  variant="primary" onClick={()=>{setShowModal(true); setServiceRequestId(serviceRequest.id)}}>Create Service Offer</Button>
                            }
                </Card.Body>
            </Card>
            <CreateServiceOfferModal show={showModal} handleClose={handleClose} serviceRequestId={serviceRequestId} />    
       </>
    )
}

export default ServiceRequestDetails