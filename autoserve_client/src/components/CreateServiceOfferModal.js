import { Modal, Button } from "react-bootstrap"
import {ServiceOffer} from '../requests'
import React, {useState} from "react"
const CreateServiceOfferModal = ({show, handleClose, service_requestId}) =>{

   const [params, setParams] = useState({comment:"Hi"})
   const handleFormChange = (event) =>{
       setParams({...params, [event.target.name]:event.target.value})
   }
      
    
    const createServiceOffer = (event)=>{
        event.preventDefault()
        ServiceOffer.create(service_requestId, params).then(handleClose())
    }


    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h2>Create Service Offers</h2>
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
          </div>
          <div className="body-form">
           <form onSubmit={createServiceOffer}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input onChange={handleFormChange} value={params.comment} type="text" className="form-control" placeholder="comment" name="comment" id="comment"/>
            </div>
            
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input onChange={handleFormChange} value={params.start_date} type="datetime-local" className="form-control" placeholder="start_date" name="start_date" id="start_date" required/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input onChange={handleFormChange} value={params.delivery_date} type="datetime-local" className="form-control" placeholder="delivery_date" name="delivery_date" id="delivery_date" required/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input onChange={handleFormChange} value={params.estimate_price} type="number" step="0.01" className="form-control" placeholder="estimate_price" name="estimate_price" id="estimate_price" required/>
            </div>
            <button type="submit" className="btn btn-secondary btn-block">Create Service Offer</button>
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

export default CreateServiceOfferModal