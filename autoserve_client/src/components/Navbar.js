
import React from 'react'
import { NavLink } from "react-router-dom";
import  Button  from 'react-bootstrap/Button'



const Navbar = (props) => {
  const {currentUser, destroySession} = props





  return  <nav className="justify-content-end" activeKey="/home" style={{padding: "10px",display: "flex", }}>
     <NavLink  style={{ marginRight: "20px" }}  to="/">Home</NavLink>
    {/* {currentUser ? <>
    <NavLink  style={{ marginRight: "20px" }}  to="/customers">Customer Page </NavLink> 
    <NavLink  style={{ marginRight: "20px" }}  to="/vehicles">Vehicles</NavLink>
    <NavLink  style={{ marginRight: "20px" }}  to="/add_vehicles">Add Vehicles</NavLink>
    <NavLink  style={{ marginRight: "20px" }}  to="/service_requests">Service Requests</NavLink>
    <NavLink  style={{ marginRight: "20px" }}  to="/new_service_request">New Service Request</NavLink>
    <NavLink  style={{ marginRight: "20px" }}  to="/service_offers">Service Offers</NavLink>
    </> 
    : ''} */}

    {/* {currentUser && currentUser.is_mechanic ? 
    <NavLink style={{ marginRight: "20px" }}  to="/mechanics">Mechanic Page</NavLink> : ''}

    {currentUser && currentUser.is_admin? 
    <NavLink style={{ marginRight: "20px" }}  to="/admin">Admin Page</NavLink> : ''} */}
    {currentUser ? 
    <>
    <NavLink  style={{ marginRight: "20px" }}  to="/profile">My Profile</NavLink>
    <span style={{ marginRight: "20px" }} >Welcome, {currentUser.full_name}</span>
    <Button className="btn-sm" onClick={destroySession}>Sign Out</Button>
    </>
     : 
    <> 
      <NavLink style={{ marginRight: "20px" }} to="/SignInPage">
        Sign in
      </NavLink>
      <NavLink style={{ marginRight: "20px" }} to="/SignUpPage">
        Sign up
      </NavLink>
    
    </> 
    }
  </nav>
}

export default Navbar