import React, {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from './components/Welcomepage';
import SignUpPage from "./components/login/SignUpPage";
import SignInPage from "./components/login/SignInPage";
import { User, Session } from './requests';
import AuthRoute from './components/AuthRoute';
import AdminPage from './components/AdminPage';
import CustomerPage from './components/CustomerPage';
import MechanicPage from './components/MechanicPage';

import './App.css';

const App = () => {
  const [state, setState] = useState({user: null})

  const getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) { 
        setState(state => {
          return { user }
        })
      }
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

  return <div className="App"> 
  <BrowserRouter>
    <Navbar currentUser={state.user} destroySession={destroySession}/>
    <Switch>
    <AuthRoute exact path="/customers" 
        isAuthenticated={state.user}
        component={CustomerPage}/>
      <AuthRoute exact path="/mechanics" 
        isAuthenticated={state.user}
        component={MechanicPage}/>
      <AuthRoute exact path="/admin" 
        isAuthenticated={state.user}
        component={AdminPage}/>
     
      <Route exact path='/SignInPage' render={(routeProps)=><SignInPage {...routeProps} onSignIn={getCurrentUser}/>} />
      <Route exact path='/SignUpPage' render={(routeProps)=><SignUpPage {...routeProps} onSignUp={getCurrentUser}/>} />
      <Route exact path="/" component={WelcomePage}/>
    </Switch>
  </BrowserRouter>
  </div>
}

export default App;