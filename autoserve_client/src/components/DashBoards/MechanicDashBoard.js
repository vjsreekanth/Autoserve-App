import React, {useState, useEffect} from 'react';
import { ServiceRequest, ServiceOffer, Appointment } from '../../requests';
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'
import { ServiceRequestIndexPage } from '../ServiceRequestIndexPage';
import { ServiceOfferIndexPage } from '../ServiceOfferIndexPage';
import { AppointmentIndexPage } from '../AppointmentIndexPage';


export const MechanicDashBoard = ({currentUser}) => {

    const[state, setState] = useState({service_requests: [], service_offers: [], appointments: []})
    const [trigger, setTrigger] = useState(true)

    const setRerender = () => {
        setTrigger(!trigger)
    }

    
    useEffect(() => {
        console.log("this is mechanic useeffect")
        if(trigger){
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
            <h1>Mechanic Dashboard</h1>
            <Container>
                <Row>
                    <Col>
                        <Card className="p-3">
                            <ServiceRequestIndexPage ServiceRequests={state.service_requests} currentUser={currentUser} setRerender={setRerender} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3">
                            <ServiceOfferIndexPage ServiceOffers={state.service_offers} currentUser={currentUser} setRerender={setRerender} />
                        </Card>
                    </Col>

                </Row>

            </Container>
            <Container>
                <Row>
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