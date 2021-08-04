import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Imports
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css';
import "./styles/index.scss"
import store from './store'
import {Login, SignUp, PrivacyPolicy, ForgotPassword, Overview} from "./pages"
import PrivateRoute from "./routes/PrivateRoute"

function App() {
  return (
    <Provider store={store}>
      <Router>
      <ToastContainer />
       <Switch>
          <Route exact path="/" render={(props) => <Login />}/>
          <Route exact path="/sign-up" render={(props) => <SignUp/>}/>
          <Route exact path="/privacy-policy" render={(props) => <PrivacyPolicy />}/>
          <Route exact path="/forgot-password" render={(props) => <ForgotPassword />}/>
          <PrivateRoute exact path="/app/dashboard" component={Overview}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
