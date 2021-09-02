import React, {useState, useEffect} from 'react';
import { ListGroup } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import CreateAppointmentModal from './CreateAppointmentModal';


export const ServiceOfferIndexPage = ({setRerender, ServiceOffers, currentUser}) => {
    
    const [offerId, setOfferId] = useState(null)
    const [offerStartDate, setOfferStartDate] = useState(null)

    const [showModal, setShowModal] = useState(false)

    const handleClose = ()=>{
        setShowModal(false)
    }
   
    
    return(
        <main>
            <h1>Service Offers</h1>
            <ListGroup>
                {ServiceOffers&&ServiceOffers.map((serviceOffer, index)=> (
                <ListGroup.Item key = {index}>
                    <Card>
                        <Card.Header as="h5">{serviceOffer.comment}</Card.Header>
                        <Card.Body>
                            <Card.Title as="h6">Appointment Date: {new Date(serviceOffer.start_date).toLocaleString()}</Card.Title>
                            <Card.Title as="h6">Delivery Date: {new Date(serviceOffer.delivery_date).toLocaleString()}</Card.Title>
                            <Card.Text>
                                Estimate-Price: {serviceOffer.estimate_price}
                            </Card.Text>
                            {!currentUser.is_mechanic&&
                            <Button variant="primary" onClick={()=>{setShowModal(true); setOfferId(serviceOffer.id); setOfferStartDate(serviceOffer.start_date)}}>Create Appointment</Button>
                            }
                        </Card.Body>
                    </Card>

                </ListGroup.Item>
               
                ))}
            </ListGroup>

            <CreateAppointmentModal show={showModal} handleClose={handleClose} serviceOfferId={offerId} serviceOffer_Date={offerStartDate} setRerender={setRerender} />

        </main>
    )
 }
 
