import { Modal, Button } from "react-bootstrap"
import {Appointment} from '../requests'
import React, {useState} from "react"
const CreateAppointmentModal = ({show, handleClose, serviceOfferId, offerStartDate}) =>{

  
   const [params, setParams] = useState({start_time: offerStartDate})
   const handleFormChange = (event) =>{
       setParams({...params, [event.target.name]:event.target.value})
   }
   
   console.log(serviceOfferId)
    
    const createAppointment = (event)=>{
        event.preventDefault()
        Appointment.create(serviceOfferId, params).then(() => {handleClose()

        
        })
    }


    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
          </div>
          <div className="body-form">
           <form onSubmit={createAppointment}>
        
            
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text mt-2">Appointment Date:</span>
              </div>
              <input onChange={handleFormChange} value={params.start_time} type="datetime-local" className="form-control" placeholder="start_time" name="start_time" id="start_time" required/>
            </div>
            <button type="submit" className="btn btn-secondary btn-block">Create Appointment</button>
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

export default CreateAppointmentModal