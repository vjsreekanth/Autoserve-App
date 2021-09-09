import React from 'react'
// import { NavLink } from "react-router-dom";
import {Navbar, Nav, Button} from 'react-bootstrap';
import logo from './images/car-logo.svg'
import { LinkContainer } from "react-router-bootstrap";






const NewNav = (props) => {
  const {currentUser, destroySession} = props

  return(
    <Navbar  fixed="top" bg="light" expand="lg">
        <LinkContainer to="/home">
          <Navbar.Brand className="font-weight-bold ms-3">
          <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top me-2"
        />{' '}
            Auto Serve
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" activeKey={window.location.pathname}>
             {currentUser && currentUser.is_mechanic ? 
              <>
                 <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link> 
            </LinkContainer>
             <LinkContainer to="/mechanics">
              <Nav.Link>Dashboard</Nav.Link> 
            </LinkContainer>
            <LinkContainer  to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          <span className="mt-2" style={{ marginRight: "20px", color: "red" }}>Welcome, {currentUser.full_name}</span>
          <Button className="btn-sm" onClick={destroySession}>Sign Out</Button>
          </>
          : ''}
    
     {currentUser && currentUser.is_admin ? 
            <>
              <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link> 
            </LinkContainer>
             <LinkContainer to="/admin">
              <Nav.Link>Dashboard</Nav.Link> 
            </LinkContainer>
            <LinkContainer  to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          <span  className="mt-2" style={{ marginRight: "20px", color: "red" }} >Welcome, {currentUser.full_name}</span>
          <Button className="btn-sm" onClick={destroySession}>Sign Out</Button>
          </>
            : ''} 
    
        {currentUser && !currentUser.is_admin && !currentUser.is_mechanic ?
         <>
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link> 
            </LinkContainer>
           <LinkContainer to="/customers">
              <Nav.Link>Dashboard</Nav.Link> 
            </LinkContainer>
          <LinkContainer  to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <span className="mt-2" style={{ marginRight: "20px", color: "red" }} >Welcome, {currentUser.full_name}</span>
            <Button className="btn-sm" onClick={destroySession}>Sign Out</Button>
            </>
            : ''} 
            {!currentUser&&
            <>
               <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link> 
            </LinkContainer>
            <LinkContainer to="/SignInPage">
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

// style={{padding: "10px",display: "flex", height: "10vh", position: "fixed", top: "0" , width: "100vw", zIndex: "50"}}