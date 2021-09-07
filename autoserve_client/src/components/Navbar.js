
import React from 'react'
import { NavLink } from "react-router-dom";
import { Button} from 'react-bootstrap';
import classes from "../../src/App.css"





const Navbar = (props) => {
  const {currentUser, destroySession} = props





  return  <nav className="bg-dark text-light justify-content-end nav sticky" style={{padding: "10px",display: "flex", height: "10vh", position: "top"  }}>
    <div>
      <NavLink activeClassName={classes.active}  style={{ marginRight: "20px" }}  to="/">Home</NavLink>
      
      {currentUser ? 
      <>
      <NavLink activeClassName={classes.active}  style={{ marginRight: "20px"}}  to="/profile">My Profile</NavLink>
      <span style={{ marginRight: "20px" }} >Welcome, {currentUser.full_name}</span>
      <Button className="btn-sm" onClick={destroySession}>Sign Out</Button>
      </>
      : 
      <> 
      <NavLink activeClassName={classes.active}  style={{ marginRight: "20px" }} to="/SignInPage">Sign in</NavLink>
      <NavLink activeClassName={classes.active}  style={{ marginRight: "20px" }} to="/SignUpPage">Sign up</NavLink>
    
    </> 
    }

    </div>
     
  </nav>
}

export default Navbar