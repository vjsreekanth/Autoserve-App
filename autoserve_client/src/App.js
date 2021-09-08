import React, {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navbar";
import WelcomePage from './components/Welcomepage';
import SignUpPage from "./components/login/SignUpPage";
import SignInPage from "./components/login/SignInPage";
import { User, Session } from './requests';
import AuthRoute from './components/AuthRoute';
import { VehicleIndexPage } from './components/VehicleIndexPage';
import { ServiceRequestIndexPage } from './components/ServiceRequestIndexPage';
import NewServiceRequestPage from './components/NewServiceRequestPage';
import { ServiceOfferIndexPage } from './components/ServiceOfferIndexPage';
import  {Footer} from './components/Footer';
import NewNav from './components/NewNav';



import './App.css';
import AddVehiclePage from './components/AddVehiclePage';
import { MechanicDashBoard } from './components/DashBoards/MechanicDashBoard';
import { AdminDashBoard } from './components/DashBoards/AdminDashBoard';
import { CustomerDashBoard } from './components/DashBoards/CustomerDashBoard';
import { UserProfilePage } from './components/UserProfilePage';



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

  const destroySession = (props) => {
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
    <NewNav currentUser={state.user} destroySession={destroySession}/>
    <div style={{margin: "10vh 0"}}>
    
    <Switch>

      <AuthRoute exact path="/mechanics" 
        isAuthenticated={state.user}
        component={MechanicDashBoard}/>
        <AuthRoute exact path="/customers" 
        isAuthenticated={state.user}
        component={CustomerDashBoard}/>
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
           <AuthRoute exact path="/profile" 
        isAuthenticated={state.user}
        component={UserProfilePage}/>
     
      <Route exact path='/SignInPage' render={(routeProps)=><SignInPage {...routeProps} onSignIn={getCurrentUser}/>} />
      <Route exact path='/SignUpPage' render={(routeProps)=><SignUpPage {...routeProps} onSignUp={getCurrentUser}/>} />
      <Route exact path="/" component={WelcomePage}/>
    </Switch>
    </div>
       <Footer /> 
  </BrowserRouter>
  </div>
}

export default App;