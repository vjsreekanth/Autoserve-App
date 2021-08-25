import React from 'react'
import { User } from '../../requests'
import sign_up from '../images/sign_up.jpg'

const SignUpPage = (props) => {
  const { onSignUp } = props

  const handleSubmit = event => {
    const { currentTarget } = event
    event.preventDefault()

    const formData = new FormData(currentTarget)
    const is_mechanic = formData.get('Select') === 'Mechanic'
    const params = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
      is_mechanic,
    }
    User.create(params).then(res => {
      if (res?.id) {
        onSignUp()
        props.history.push('/')
      }
    })
  }
  return(
    <main style={{ backgroundImage: `url(${sign_up})`, height:'100vh'  }}>
        <h1>Sign Up</h1>
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="text" className="form-control" placeholder="First Name" name="first_name" id="first_name"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="text" className="form-control" placeholder="Last Name" name="last_name" id="last_name"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="email" className="form-control" placeholder="E-mail" name="email" id="email"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="tel" className="form-control" placeholder="phone number" name="phone" id="phone"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="password" className="form-control" placeholder="Password" name="password" id="password"/>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"></span>
              </div>
              <input type="password" className="form-control" placeholder=" Confirm Password" name="password_confirmation" id="password_confirmation"/>
            </div>
            <div> <div>
                    <input type="radio" value="Customer" name="Select" defaultChecked/> Customer
                    <input type="radio" value="Mechanic" name="Select" />Mechanic
                  </div></div>
            <button type="submit" className="btn btn-secondary btn-block">Sign Up</button>
            <div className="message">
            </div> 
            </form>
          </div>
        </div>
       </div>   
    
    </main>
)
  }
      
export default SignUpPage