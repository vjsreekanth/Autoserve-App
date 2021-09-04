import { Modal, Button } from "react-bootstrap"
import {ServiceRequest} from '../requests'
import React, {useState} from "react"
const CreateServiceRequestModal = ({show, handleClose, vehicleId}) =>{

   const [params, setParams] = useState({})
   const handleFormChange = (event) =>{
       setParams({...params, [event.target.name]:event.target.value})
   }
      
    
    const createServiceRequest = (event)=>{
        event.preventDefault()
        ServiceRequest.create(vehicleId, params).then(

          () => {
            setTimeout(()=>{handleClose()}, 100)
            
          })
    }


    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Service Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
          </div>
          <div className="body-form">
           <form onSubmit={createServiceRequest}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text mt-2">Title</span>
              </div>
              <input onChange={handleFormChange} value={params.title} type="text" className="form-control" placeholder="" name="title" id="title"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text mt-2">Description</span>
              </div>
              <input onChange={handleFormChange} value={params.description} type="text" className="form-control" placeholder="" name="description" id="description"/>
            </div>
            
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text mt-2">Exp.Start-Date</span>
              </div>
              <input onChange={handleFormChange} value={params.appointment_date} type="datetime-local" className="form-control" placeholder="" name="appointment_date" id="appointment_date" required/>
            </div>
            
            <button type="submit" className="btn btn-secondary btn-block">Create Service Request</button>
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

export default CreateServiceRequestModal