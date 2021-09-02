import React, {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from './components/Welcomepage';
import SignUpPage from "./components/login/SignUpPage";
import SignInPage from "./components/login/SignInPage";
import { User, Session } from './requests';
import AuthRoute from './components/AuthRoute';
import { VehicleIndexPage } from './components/VehicleIndexPage';
import { ServiceRequestIndexPage } from './components/ServiceRequestIndexPage';
import NewServiceRequestPage from './components/NewServiceRequestPage';
import { ServiceOfferIndexPage } from './components/ServiceOfferIndexPage';

import './App.css';
import AddVehiclePage from './components/AddVehiclePage';
import { MechanicDashBoard } from './components/DashBoards/MechanicDashBoard';
import { AdminDashBoard } from './components/DashBoards/AdminDashBoard';
import { CustomerDashBoard } from './components/DashBoards/CustomerDashBoard';



const App = () => {
  const [state, setState] = useState({user: null})

  const getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) { 
        setState(state => {
          return { user }
        })
      }
      return user
    })
  }

  const destroySession = () => {
    Session.destroy().then((res) => {
      setState((state) => {
        return { user: null };
      });
    });
  }

  useEffect(() => {
    getCurrentUser()
  }, [])


    console.log(state)
    console.log("this is state")
  return <div className="App"> 
  <BrowserRouter>
    <Navbar currentUser={state.user} destroySession={destroySession}/>
    <Switch>
      {state.user&&<Route exact path="/customers" 
        render={(routeProps) => {
          return (<CustomerDashBoard {...routeProps} currentUser={state.user} />)
        }}></Route>}
    
      <AuthRoute exact path="/mechanics" 
        isAuthenticated={state.user}
        component={MechanicDashBoard}/>
      <AuthRoute exact path="/admin" 
        isAuthenticated={state.user}
        component={AdminDashBoard}/>
        <AuthRoute exact path="/vehicles" 
        isAuthenticated={state.user}
        component={VehicleIndexPage}/>
         <AuthRoute exact path="/service_requests" 
        isAuthenticated={state.user}
        component={ServiceRequestIndexPage}/>
        <AuthRoute exact path="/add_vehicles" 
        isAuthenticated={state.user}
        component={AddVehiclePage}/>
         <AuthRoute exact path="/new_service_request" 
        isAuthenticated={state.user}
        component={NewServiceRequestPage}/>
          <AuthRoute exact path="/service_offers" 
        isAuthenticated={state.user}
        component={ServiceOfferIndexPage}/>
     
      <Route exact path='/SignInPage' render={(routeProps)=><SignInPage {...routeProps} onSignIn={getCurrentUser}/>} />
      <Route exact path='/SignUpPage' render={(routeProps)=><SignUpPage {...routeProps} onSignUp={getCurrentUser}/>} />
      <Route exact path="/" component={WelcomePage}/>

    </Switch>
  </BrowserRouter>
  </div>
}

export default App;