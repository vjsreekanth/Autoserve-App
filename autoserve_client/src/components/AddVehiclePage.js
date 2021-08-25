import React from 'react'
import { Vehicle } from '../requests'

const AddVehiclePage = (props) => {

  const handleSubmit = event => {
    const { currentTarget } = event
    event.preventDefault()

    const formData = new FormData(currentTarget)
    const params = {
      vehicle_type: formData.get('vehicle_type'),
      make: formData.get('make'),
      model: formData.get('model'),
      trim: formData.get('trim'),
      year: formData.get('year'),
      vin: formData.get('vin')
    }
    const ownerId = props.currentUser.id
    Vehicle.create(ownerId, params).then(res => {
      if (res?.id) {
        props.history.push('/vehicles')
      } else {
        console.log(res)
      } 
    })
  }

    return <main>
      <h2>Add Vehicles</h2>
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
              <input type="text" className="form-control" placeholder="vehicle_type" name="vehicle_type" id="vehicle_type"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="text" className="form-control" placeholder="make" name="make" id="make"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="text" className="form-control" placeholder="model" name="model" id="model"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="text" className="form-control" placeholder="trim" name="trim" id="trim"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="text" className="form-control" placeholder="year" name="year" id="year"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="text" className="form-control" placeholder="vin" name="vin" id="vin"/>
            </div>
            

            <button type="submit" className="btn btn-secondary btn-block">Add Vehicle</button>
            <div className="message">
            </div> 
            </form>
          </div>
        </div>
       </div>   
    
    </main>
  }
      
export default AddVehiclePage