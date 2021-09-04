import React, {useState, useEffect} from 'react';
import { ServiceOffer, ServiceRequest, Vehicle, Appointment } from '../../requests';
import { ServiceRequestIndexPage } from '../ServiceRequestIndexPage';
import { ServiceOfferIndexPage } from '../ServiceOfferIndexPage';
import { AppointmentIndexPage } from '../AppointmentIndexPage';
import {VehicleIndexPage} from '../VehicleIndexPage'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'



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
            <h1>Customer Dashboard</h1>
            <Container className="m-2">
                <Col>
                    <Row className="m-2">
                    <Card className="p-3">
                            <ServiceRequestIndexPage ServiceRequests={state.service_requests} currentUser={currentUser} setRerender={setRerender}  />
                        </Card>
                    </Row>
                    <Row className="m-2">
                    <Card className="p-3">
                            <ServiceOfferIndexPage ServiceOffers={state.service_offers} currentUser={currentUser} setRerender={setRerender} />
                        </Card>
                    </Row>
                    <Row className="m-2">
            
                        <Card className="p-3">
                            <VehicleIndexPage vehicles={state.vehicles} setRerender={setRerender} currentUser={currentUser} />
                        </Card>
                
                    </Row>
                    <Row className="m-2">
                
                        <Card className="p-3">
                            <AppointmentIndexPage appointments={state.appointments} setRerender={setRerender} />
                        </Card>
        

                    </Row>
                </Col>
                
               
           

           
                
               
            </Container>
                    
        </main>
        
    )
}