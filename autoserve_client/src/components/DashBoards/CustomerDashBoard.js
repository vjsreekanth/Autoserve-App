import React, {useState, useEffect} from 'react';
import { ServiceOffer, ServiceRequest, Vehicle, Appointment } from '../../requests';
import { ServiceRequestIndexPage } from '../ServiceRequestIndexPage';
import { ServiceOfferIndexPage } from '../ServiceOfferIndexPage';
import { AppointmentIndexPage } from '../AppointmentIndexPage';
import {VehicleIndexPage} from '../VehicleIndexPage'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'



export const CustomerDashBoard = ({setRerender, currentUser}) => {

    const [state, setState] = useState({service_requests: [], service_offers: [], appointments: [], vehicles: []})
    const [trigger, setTrigger] = useState(true)


    useEffect(() => {
        if(trigger){
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
        
                return () => {setTrigger(false)}

        }, [trigger])
      
  

    

    return(
        
        <main>
            <h1>Customer Dashboard</h1>
            <Container>
                <Row>
                    <Col>
                        <Card className="p-3">
                            <ServiceRequestIndexPage ServiceRequests={state.service_requests} currentUser={currentUser}  />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3">
                            <ServiceOfferIndexPage ServiceOffers={state.service_offers} currentUser={currentUser} />
                        </Card>
                    </Col>

                
                
                   

                </Row>

            </Container>

            <Container>
                <Row>
                     <Col>
                        <Card className="p-3">
                            <VehicleIndexPage vehicles={state.vehicles} setRerender={setRerender} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3">
                            <AppointmentIndexPage appointments={state.appointments} setRerender={setRerender} />
                        </Card>
                    </Col>

                </Row>
            </Container>
                    
        </main>
        
    )
}