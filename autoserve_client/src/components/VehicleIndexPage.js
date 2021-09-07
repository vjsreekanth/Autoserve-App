import React, {useState} from 'react';

import Button from 'react-bootstrap/Button'

import { ListGroup } from 'react-bootstrap';
import CreateVehicleModal from './CreateVehicleModal';
import VehicleDetails from './VehicleDetails';






export const VehicleIndexPage = ({setRerender, vehicles, currentUser}) => {
    
    // const [vehicleId, setVehicleId] = useState(null)
   
    const [showModal, setShowModal] = useState(false)

    const handleClose = ()=>{
        setRerender();
        setShowModal(false)
    }
   
  
  
    return(
        <main>
            <h1 style={{ backgroundColor: 'lightgoldenrodyellow'}}>My Vehicles</h1>
            
            <Button class="mb-2" variant="primary mb-2" onClick={()=>{setShowModal(true);}}>Add Vehicle</Button>
            <ListGroup>
                {vehicles.map((vehicle, id) => (

                <ListGroup.Item>
                  <VehicleDetails  key={id} vehicle={vehicle} setRerender={setRerender} />
                    
            </ListGroup.Item>
                ))}
            </ListGroup>
            <CreateVehicleModal show={showModal} handleClose={handleClose} currentUser={currentUser}/>
          
        </main>
    )
 }

 export default VehicleIndexPage