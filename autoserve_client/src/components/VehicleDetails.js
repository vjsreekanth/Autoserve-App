import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
    <Card style={{ width: "auto"}} key={id}>
    <Card.Body>
        <Card.Title>{vehicle.title}</Card.Title>
        <Card.Text>Vin:
            {vehicle.vin}
        </Card.Text><br />
        <Button variant="primary" onClick={()=>{setShowModal(true); setVehicleId(vehicle.id);}}>Create Service Request</Button>
    </Card.Body>
</Card>
<CreateServiceRequestModal show={showModal} handleClose={handleClose} vehicleId={vehicleId}/>
</main>
  )
}

export default VehicleDetails