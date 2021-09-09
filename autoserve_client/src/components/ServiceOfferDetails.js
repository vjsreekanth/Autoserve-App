import React, {useState} from 'react';
import { Card, Button, Badge} from 'react-bootstrap';
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
            <Card className="shadow">
            {currentUser.is_mechanic?
                       <Card.Header style={{ backgroundColor: 'lightgrey'}}>Service Offer for {serviceOffer.customer.full_name.toUpperCase()}</Card.Header> :
                       <Card.Header style={{ backgroundColor: 'lightgrey'}}>Service Offer for {serviceOffer.service_vehicle}</Card.Header>}
                

                
                
                    <Card.Body style={{ textAlign: "start"}}>

                    {currentUser.is_mechanic? 

                         <>

                        <Card.Title >Customer Details</Card.Title>
                        <Card.Text>{serviceOffer.customer.full_name} </Card.Text>
                        <Card.Text>{serviceOffer.service_vehicle}</Card.Text>
                        <Card.Text>Start Date: {new Date(serviceOffer.start_date).toUTCString()}</Card.Text>
                        <Card.Text>Delivery Date: {new Date(serviceOffer.start_date).toUTCString()}</Card.Text>
                        <h3><Badge className="mt-2" bg="secondary">Estimate-Price: $ {serviceOffer.estimate_price}</Badge></h3>
                        <h4>Service Provider Comments:</h4>
                        <Card className="frame mb-2" style={{ Width: 'auto', height: "3rem"}}>
                    
                            <Card.Text className="p-2">{serviceOffer.comment}</Card.Text>

                        </Card>

                        </>
                    : 

                    <>
                    <Card.Title >Service Provider Details </Card.Title>

                        
                    <Card.Text>Name: {serviceOffer.mechanic.full_name}</Card.Text>
                            <Card.Text>Email: {serviceOffer.mechanic.email}</Card.Text>
                            
                            <Card.Text>Phone: {serviceOffer.mechanic.phone}</Card.Text>
                            
                           
                        

                        <Card.Title >Service Offer Details </Card.Title>
                        <Card.Text>Start Date: {new Date(serviceOffer.start_date).toUTCString()}</Card.Text>
                        <Card.Text>Delivery Date: {new Date(serviceOffer.start_date).toUTCString()}</Card.Text>
                        <h3><Badge className="mt-2" bg="secondary">Estimate-Price: $ {serviceOffer.estimate_price}</Badge></h3>
                        <h4>Service Provider Comments:</h4>
                        <Card className="frame mb-2" style={{ Width: 'auto', height: "3rem"}}>
                    
                            <Card.Text className="p-2">{serviceOffer.comment}</Card.Text>

                        </Card>

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