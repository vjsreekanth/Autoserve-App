
import React from 'react'
import { NavLink } from "react-router-dom";
import  Button  from 'react-bootstrap/Button'



const Navbar = (props) => {
  const {currentUser, destroySession} = props



  return  <nav style={{padding: "10px",display: "flex", }}>
     <NavLink style={{ marginRight: "20px" }}  to="/">Home</NavLink>
    {currentUser ? <NavLink  style={{ marginRight: "20px" }}  to="/customers">Customer Page </NavLink> : ''}

    {currentUser && currentUser.is_mechanic ? 
    <NavLink style={{ marginRight: "20px" }}  to="/mechanics">Mechanic Page</NavLink> : ''}

    {currentUser && currentUser.is_admin? 
    <NavLink style={{ marginRight: "20px" }}  to="/admin">Admin Page</NavLink> : ''}
    {currentUser ? 
    <>
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