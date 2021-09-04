import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { ListGroup } from 'react-bootstrap';
import CreateVehicleModal from '../CreateVehicleModal';
import CreateServiceRequestModal from '../CreateServiceRequestModal';



export const VehicleIndexPage = ({setRerender, vehicles, currentUser}) => {
    
    const [vehicleId, setVehicleId] = useState(null)
   
    const [showModal, setShowModal] = useState(false)

    const handleClose = ()=>{
        setRerender();
        setShowModal(false)
    }
   
  
  
    return(
        <main>
            <h1>My Vehicles</h1>
            <Button class="mb-2" variant="primary mb-2" onClick={()=>{setShowModal(true);}}>Add Vehicle</Button>
            <ListGroup>
                {vehicles.map((vehicle,index) => (

                <ListGroup.Item>
                    <Card style={{ width: "auto"}} key={index}>
                        <Card.Body>
                            <Card.Title>{vehicle.title}</Card.Title>
                            <Card.Text>Vin:
                                {vehicle.vin}
                            </Card.Text><br />
                            <Button variant="primary" onClick={()=>{setShowModal(true); setVehicleId(vehicle.id);}}>Create Service Request</Button>
                        </Card.Body>
                    </Card>
                    
            </ListGroup.Item>
                ))}
            </ListGroup>
            <CreateVehicleModal show={showModal} handleClose={handleClose} vehicleId={vehicleId}/>

        </main>
    )
 }

 export default VehicleIndexPage