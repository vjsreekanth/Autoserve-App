import React, {useState, useEffect} from 'react';
import {Vehicle} from '../requests';
// import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

import { ListGroup } from 'react-bootstrap';


export const VehicleIndexPage = (props) => {
    const [vehicleIndex, setVehicleIndex] = useState({
        vehicles: [],
    });
     
    useEffect(() => {
        Vehicle.index().then(vehicles => {
          setVehicleIndex({ vehicles });
        });
    }, []);
  
    return(
        <main>
            <h1>My Vehicles</h1>
            <ListGroup>
                {vehicleIndex.vehicles.map((vehicle,index) => (

                <ListGroup.Item>
                    <Card style={{ width: "auto"}} key={index}>
                        <Card.Body>
                            <Card.Title>{vehicle.title}</Card.Title>
                            <Card.Text>
                                {vehicle.vin}
                            </Card.Text><br />
                        </Card.Body>
                    </Card>
                    
            </ListGroup.Item>
                ))}
            </ListGroup>
          
        </main>
    )
 }

 export default VehicleIndexPage