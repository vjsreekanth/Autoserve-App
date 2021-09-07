import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import CreateAppointmentModal from './CreateAppointmentModal';

const ServiceOfferDetails = (props) => {

    const {serviceOffer, setRerender, currentUser} = props


    const [showModal, setShowModal] = useState(false)
    const [serviceOfferId, setServiceOfferId] = useState(null)
    const [offerStartDate, setOfferStartDate] = useState(null)

    const handleClose = () => {
        setRerender();
        setShowModal(false)
    }
 
    console.log(offerStartDate)

    return(
        <main >
            <Card>
                <Card.Header>Service Request: {serviceOffer.service_title}</Card.Header>
                
                    <Card.Body>
                        <Card.Title>Vehicle: {serviceOffer.service_vehicle}</Card.Title>
                        <Card.Title as="span">Start Date: {new Date(serviceOffer.start_date).toLocaleDateString()}</Card.Title>
                        <Card.Title className="ms-2" as="span">Time: {new Date(serviceOffer.start_date).toLocaleTimeString()}</Card.Title><br />
                        <Card.Title as="span">Delivery Date: {new Date(serviceOffer.start_date).toLocaleDateString()}</Card.Title>
                        <Card.Title className="ms-2" as="span">Time: {new Date(serviceOffer.start_date).toLocaleTimeString()}</Card.Title><br />
                        <Card.Text className="m-2" as="button">Estimate-Price: $ {serviceOffer.estimate_price}</Card.Text>
                        <Card.Title>Comments from Service Provider</Card.Title>
                        <Card.Text>{serviceOffer.comment}</Card.Text>

                        {!currentUser.is_mechanic&&
                        <>
                        <Card.Text>
                            
                        </Card.Text>
                        <Button disabled={serviceOffer.start_time} variant="primary" onClick={()=>{setShowModal(true); setServiceOfferId(serviceOffer.id); setOfferStartDate(serviceOffer.start_date)}}>{ serviceOffer.start_time?"Appointment Created":"Create Appointment"}</Button>
                        </>
                        }
                    </Card.Body>
            </Card>
            <CreateAppointmentModal show={showModal} handleClose={handleClose} serviceOfferId={serviceOfferId} offerStartDate={offerStartDate} />

               
        </main>
    )
}

export default ServiceOfferDetails