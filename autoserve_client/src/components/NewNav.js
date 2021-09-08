import React from 'react'
// import { NavLink } from "react-router-dom";
import {Navbar, Nav, Button} from 'react-bootstrap';
// import logo from './images/car-logo.svg'
import { LinkContainer } from "react-router-bootstrap";
import classes from "../../src/App.css"





const NewNav = (props) => {
  const {currentUser, destroySession} = props

  return(
    <Navbar style={{padding: "10px",display: "flex", height: "10vh", position: "fixed", top: "0" , width: "100vw", zIndex: "50"}} collapseOnSelect  bg="light" expand="md">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold">
            Auto Serve
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav activeKey={window.location.pathname}>
             {currentUser && currentUser.is_mechanic ? 
              <>
                 <LinkContainer activeClassName={classes.active} to="/">
              <Nav.Link>Home</Nav.Link> 
            </LinkContainer>
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
              <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link> 
            </LinkContainer>
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
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link> 
            </LinkContainer>
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
               <LinkContainer to="/">
              <Nav.Link activeClassName={classes.active}>Home</Nav.Link> 
            </LinkContainer>
            <LinkContainer class="nav"  to="/SignInPage">
              <Nav.Link activeClassName={classes.active}>Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/SignUpPage">
              <Nav.Link activeClassName={classes.active}>Sign Up</Nav.Link>
            </LinkContainer>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
            
        
  

  )
}

export default NewNav