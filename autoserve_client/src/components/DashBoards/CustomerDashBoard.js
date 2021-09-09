import React, {useState, useEffect} from 'react';
import { ServiceOffer, ServiceRequest, Vehicle, Appointment } from '../../requests';
import { ServiceRequestIndexPage } from '../ServiceRequestIndexPage';
import { ServiceOfferIndexPage } from '../ServiceOfferIndexPage';
import { AppointmentIndexPage } from '../AppointmentIndexPage';
import {VehicleIndexPage} from '../VehicleIndexPage'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col, Button } from 'react-bootstrap'



export const CustomerDashBoard = ({ currentUser}) => {

    const [state, setState] = useState({service_requests: [], service_offers: [], appointments: [], vehicles: []})
    const [trigger, setTrigger] = useState(true)


    const setRerender=()=>{
        setTrigger(true)


    }


    useEffect(() => {
        if(trigger){
            setTrigger(false)
            Vehicle.index().then(vehicles => {
                setState(state => {
                    return {
                      ...state,
                      vehicles
                    }})
                })
    
                ServiceRequest.index().then(service_requests => {
                    setState(state => {
                        return {
                          ...state,
                          service_requests
                        }})
                    })
    
                ServiceOffer.index().then(service_offers => {
                    console.log(service_offers)
                  setState(state => {
                      
                    return {
                      ...state,
                      service_offers
                    }})
                })
    
                Appointment.index().then(appointments => {
                    setState(state => {
                      return {
                        ...state,
                        appointments
                      }})
                  })
                }
        
        

        }, [trigger])
      
  

    

    return(
        
        <main class="customer-dashboard">
            
            
            <Container className="mb-3"  fluid="md">
            <h2>{currentUser.full_name}'s Dashboard</h2>

                <Row className="m-2">
                    <Col sm={12}>
                        <Card className="p-3">
                                <ServiceRequestIndexPage ServiceRequests={state.service_requests} currentUser={currentUser} setRerender={setRerender}  />
                        </Card>
                    </Col>
                </Row>
                
                <Row className="m-2">
                    <Col sm={12}>
                        <Card className="p-3">
                                <ServiceOfferIndexPage ServiceOffers={state.service_offers} currentUser={currentUser} setRerender={setRerender} />
                        </Card>
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col sm={12}>
                    <Card className="p-3">
                            <VehicleIndexPage vehicles={state.vehicles} setRerender={setRerender} currentUser={currentUser} />
                        </Card>
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col sm={12}>
                        <Card className="p-3">
                            <AppointmentIndexPage appointments={state.appointments} setRerender={setRerender} currentUser={currentUser} />
                        </Card>
                    </Col>
                </Row>
            </Container>

            <div style={{zIndex: "10", position: "fixed", bottom: "140px", right: "0px", left: "0px", backgroundColor: "lightblue"}}> 
                <Row>
                    <Col>
                        <Button variant="primary" className="m-1" href="#serviceRequests">Service Requests</Button>
                        <Button variant="secondary" className="m-1" href="#vehicles">Vehicles</Button>
                        <Button variant="secondary" className="m-1" href="#serviceOffers">Service Offers</Button>
                        <Button variant="secondary" href="#appointments">Appointments</Button>
                    </Col>
                           
                </Row>
            </div>
                    
        </main>
        
    )
}