import React, {useState, useEffect} from 'react';
import {ServiceRequest} from '../requests';
import { ListGroup } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import CreateServiceOfferModal from './CreateServiceOfferModal'


export const ServiceRequestIndexPage = ({setRerender, currentUser}) => {
    const [serviceRequestIndex, setServiceRequestIndex] = useState({
        serviceRequests: [],
    });
    const [requestId,setRequestId] = useState(null)

    const [showModal, setShowModal] = useState(false)

    const handleClose = ()=>{
        setShowModal(false)
    }
     console.log(currentUser)
    useEffect(() => {
        ServiceRequest.index().then(serviceRequests => {
            setServiceRequestIndex({ serviceRequests });
        });
    }, []);
  
    return(
        <main>
            <h1>Service Requests</h1>
            <ListGroup>
                {serviceRequestIndex.serviceRequests.map((serviceRequest, index)=> (
                <ListGroup.Item key = {index}>
                    <Card>
                        <Card.Header as="h5">{serviceRequest.title}</Card.Header>
                        <Card.Body>
                            <Card.Title as="h6">Appointment Date: {new Date(serviceRequest.appointment_date).toLocaleString()}</Card.Title>
                            <Card.Text>
                                {serviceRequest.description}
                            </Card.Text>
                            {currentUser.is_mechanic&&

                            <Button variant="primary" onClick={()=>{setShowModal(true); setRequestId(serviceRequest.id)}}>Create Service Offer</Button>
                            }
                        </Card.Body>
                    </Card>

                </ListGroup.Item>
               
                ))}
            </ListGroup>
            <CreateServiceOfferModal show={showModal} handleClose={handleClose} service_requestId={requestId} setRerender={setRerender}/>

        </main>
    )
 }
 
