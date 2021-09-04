import { Modal, Button } from "react-bootstrap"
import {Vehicle} from '../requests'
import React, {useState} from "react"

const CreateVehicleModal = ({show, handleClose, currentUser}) =>{

   const [params, setParams] = useState({})
   const handleFormChange = (event) =>{
       setParams({...params, [event.target.name]:event.target.value})
   }
      
    
    const createVehicle = (event)=>{
        event.preventDefault()
        Vehicle.create(currentUser.id, params).then(

          () => {
            setTimeout(()=>{handleClose()}, 100)
            
          })
    }


    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
          </div>
          <div className="body-form">
           <form onSubmit={createVehicle}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text mt-2">Vehicle Type</span>
              </div>
              <input onChange={handleFormChange} value={params.vehicle_type} type="text" className="form-control" placeholder="" name="vehicle_type" id="vehicle_type"/>
            </div>
            
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span  className="input-group-text mt-2">Make</span>
              </div>
              <input onChange={handleFormChange} value={params.make} type="text" className="form-control" placeholder="" name="make" id="make" required/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text mt-2">Model</span>
              </div>
              <input onChange={handleFormChange} value={params.model} type="text" className="form-control" placeholder="" name="model" id="model" required/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text mt-2">Trim</span>
              </div>
              <input onChange={handleFormChange} value={params.trim} type="text" className="form-control" placeholder="" name="trim" id="trim" required/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text mt-2">Year</span>
              </div>
              <input onChange={handleFormChange} value={params.year} type="text" className="form-control" placeholder="" name="year" id="year" required/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text mt-2">Vin</span>
              </div>
              <input onChange={handleFormChange} value={params.vin} type="text" className="form-control" placeholder="" name="vin" id="vin" required/>
            </div>
            <button type="submit" className="btn btn-secondary btn-block">Add Vehicle</button>
            <div className="message">
            </div> 
            </form>
          </div>
        </div>
       </div>  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )



}

export default CreateVehicleModal




