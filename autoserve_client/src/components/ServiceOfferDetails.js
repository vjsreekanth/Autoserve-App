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
        <main>
            <Card>
                <Card.Header as="h5"></Card.Header>
                    <Card.Body>
                        <Card.Title as="h6">Appointment Date: {new Date(serviceOffer.start_date).toLocaleString()}</Card.Title>
                        <Card.Title as="h6">Delivery Date: {new Date(serviceOffer.delivery_date).toLocaleString()}</Card.Title>
                        <Card.Text>
                            Estimate-Price: {serviceOffer.estimate_price}
                        </Card.Text>
                        <Card.Text>
                            {serviceOffer.comment}
                        </Card.Text>
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