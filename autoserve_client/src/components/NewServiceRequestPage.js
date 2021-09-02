import React, {useEffect, useState} from 'react'
import { ServiceRequest, Vehicle } from '../requests'

const NewServiceRequestPage = ({setRerender, currentUser, history}) => {
  const [state, setState] = useState([])
  useEffect(() => {
    Vehicle.index().then(vehicles => {
      setState(vehicles)
    })
  }, [])


  const handleSubmit = event => {
    const { currentTarget } = event
    event.preventDefault()

    const formData = new FormData(currentTarget)
    const params = {
      title: formData.get('title'),
      description: formData.get('description'),
      appointment_date: formData.get('appointment_date'), 
      
    }
    // const ownerId = props.currentUser.id
    console.log(currentUser.vehicles)
    const vehicleId = formData.get('Vehicle')
    
    ServiceRequest.create(vehicleId, params).then(res => {
      if (res?.id) {
        
        history.push('/service_requests')
      } else {
        console.log(res)
      } 
      
    })
    
  }
    return <main>
      <h2>Create Service Request</h2>
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
          </div>
          <div className="body-form">
           <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="text" className="form-control" placeholder="title" name="title" id="vtitle"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="textarea" className="form-control" placeholder="description" name="description" id="description"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="datetime-local" className="form-control" placeholder="appointment_date" name="appointment_date" id="appointment_date" required/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <select name="Vehicle" id="Vehicle">
                {state.map(vehicle=> <option value={vehicle.id}>{vehicle.title}</option>)}
                <option></option>
              </select>
            </div>
            

            <button type="submit" className="btn btn-secondary btn-block">Create Service Request</button>
            <div className="message">
            </div> 
            </form>
          </div>
        </div>
       </div>   
    
    </main>
  }
      
export default NewServiceRequestPage