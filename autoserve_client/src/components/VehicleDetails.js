import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import {Card, Badge} from 'react-bootstrap';
import CreateServiceRequestModal from './CreateServiceRequestModal';


const VehicleDetails = (props) => {
    const {id, vehicle, setRerender} = props


    const [showModal, setShowModal] = useState(false)
    const [vehicleId, setVehicleId] = useState(null)

    const handleClose = ()=>{
        setRerender();
        setShowModal(false)
    }
 

  

  return (
   <main>
    <Card className="shadow" style={{ width: "auto"}} key={id}>
    <Card.Body style={{ textAlign: "start"}}>
        <Card.Title>{vehicle.title}</Card.Title>
        <Card.Text>Make: {vehicle.make} </Card.Text>
        <Card.Text>Model: {vehicle.model} </Card.Text>
        <Card.Text>Model Year: {vehicle.year} </Card.Text>
        <Card.Text>Vin: {vehicle.vin}</Card.Text>
        <Button variant="primary" onClick={()=>{setShowModal(true); setVehicleId(vehicle.id);}}>Create Service Request</Button>
    </Card.Body>
</Card>
<CreateServiceRequestModal show={showModal} handleClose={handleClose} vehicleId={vehicleId}/>
</main>
  )
}

export default VehicleDetails