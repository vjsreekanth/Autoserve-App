import React, {useState, useEffect} from 'react';
import {Vehicle} from '../requests';
// import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const VehicleIndexPage = (props) => {
    const [vehicleIndex, setVehicleIndex] = useState({
        vehicles: [],
    });
     
    useEffect(() => {
        Vehicle.index(props.currentUser.id).then(vehicles => {
          setVehicleIndex({ vehicles });
        });
    }, []);
  
    return(
        <main>
            <h1>My Vehicles</h1>
            <Row xs={1} md={2} className="g-4">
                {vehicleIndex.vehicles.map((vehicle,index) => (

            <Col className='mt-5 px-md-5'lg={4} md={6} xs={12}>
                <Card style={{ width: "auto"}} key={index}>
                    <Card.Body>
                        <Card.Title>{vehicle.title}</Card.Title>
                        <Card.Text>
                            {vehicle.vin}
                        </Card.Text><br />
                    </Card.Body>
                </Card>
                    
            </Col>
                ))}
            </Row>
          
        </main>
    )
 }

 export default VehicleIndexPage