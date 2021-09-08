import React from 'react'
import { NavLink } from "react-router-dom";
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import logo from './images/car-logo.svg'
import { LinkContainer } from "react-router-bootstrap";





const NewNav = (props) => {
  const {currentUser, destroySession} = props

  return(
    <Navbar  style={{padding: "10px",display: "flex", height: "10vh", position: "fixed", top: "0" , width: "100vw", zIndex: "50"}} collapseOnSelect  bg="light" expand="md">
        <LinkContainer to="/">
          <Navbar.Brand style={{ textColor: "white" }} className="font-weight-bold">
            Auto Serve
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav class="nav">
             {currentUser && currentUser.is_mechanic ? 
              <>
             <LinkContainer to="/mechanics">
              <Nav.Link>Dashboard</Nav.Link> 
            </LinkContainer>
            <LinkContainer  to="/profile">
            <Nav.Link class="nav">Profile</Nav.Link>
          </LinkContainer>
          <span className="mt-2" style={{ marginRight: "20px" }} >Welcome, {currentUser.full_name}</span>
          <Button className="btn-sm" onClick={destroySession}>Sign Out</Button>
          </>
          : ''}
    
     {currentUser && currentUser.is_admin ? 
            <>
             <LinkContainer to="/admin">
              <Nav.Link>Dashboard</Nav.Link> 
            </LinkContainer>
            <LinkContainer  to="/profile">
            <Nav.Link class="nav">Profile</Nav.Link>
          </LinkContainer>
          <span className="mt-2" style={{ marginRight: "20px" }} >Welcome, {currentUser.full_name}</span>
          <Button className="btn-sm" onClick={destroySession}>Sign Out</Button>
          </>
            : ''} 
    
        {currentUser && !currentUser.is_admin && !currentUser.is_mechanic ?
         <>
           <LinkContainer to="/customers">
              <Nav.Link>Dashboard</Nav.Link> 
            </LinkContainer>
          <LinkContainer  to="/profile">
              <Nav.Link class="nav">Profile</Nav.Link>
            </LinkContainer>
            <span className="mt-2" style={{ marginRight: "20px" }} >Welcome, {currentUser.full_name}</span>
            <Button className="btn-sm" onClick={destroySession}>Sign Out</Button>
            </>
            : ''} 
            {!currentUser&&
            <>
            <LinkContainer class="nav"  to="/SignInPage">
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/SignUpPage">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
            
        
  

  )
}

export default NewNav