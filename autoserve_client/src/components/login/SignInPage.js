import React from 'react'
import { Session } from '../../requests'
import sign_in from '../images/sign_in.jpg'
import './login.css'

const SignInPage = (props) => {
  const { onSignIn } = props

  function handleSubmit(event) {
    event.preventDefault()
    const {currentTarget} = event
    const formData = new FormData(currentTarget)
    const params = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    Session.create(params).then(data => {
      console.log(data)
      if (data.id) {
        onSignIn().then(user=>{
          if(user.is_admin){
            props.history.push('/admin')

          }else if(user.is_mechanic){
            props.history.push('/mechanics')
          }else{
            props.history.push('/customers')
          }
       })
       
      }
    })
  }

  return <main style={{ backgroundImage: `url(${sign_in})`}}>
    <h1 className="pt-3 text-primary">Sign In</h1>
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
            <span className="input-group-text mt-2 me-1">Email<i className="fa fa-user"></i></span>
          </div>
          <input type="text" className="form-control" placeholder="" name="email" id="email"/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text mt-2 me-1">Password<i className="fa fa-lock"></i></span>
          </div>
          <input type="password" className="form-control" placeholder="" name="password" id="password"/>
        </div>
        <button type="submit" className="btn btn-info btn-block">Sign In</button>
        <div className="message">
        </div>
          </form>
        </div>
      </div>
      </div>   
  </main>
  }
export default SignInPage