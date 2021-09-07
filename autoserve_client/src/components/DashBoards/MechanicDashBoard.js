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
        console.log("setRerender function call")
        setTrigger(true)
    }

    
    useEffect(() => {
        console.log("this is trigger", trigger)
       
        if(trigger){
            setTrigger(false)
            ServiceRequest.index().then(service_requests => {
                setState(state => {
                    return {
                        ...state,
                        service_requests
                    }})
                })
                
                ServiceOffer.index().then(service_offers => {
                    setState(state => {
                  console.log("this is mechanic useeffect", service_offers)
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
        // return () => {setTrigger(false)}
    }, [trigger])

    

    return(
        <main class="mechanic-dashboard">
            <h1>Mechanic Dashboard</h1>
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
                            <AppointmentIndexPage appointments={state.appointments} setRerender={setRerender} currentUser={currentUser} />
                        </Card>
                    </Row>
                </Col>
            </Container>
        </main>
    )
}