import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Imports
import 'antd/dist/antd.css'
import "./styles/index.scss"
import store from './store'
import {Login, SignUp, PrivacyPolicy} from "./pages"


function App() {
  return (
    <Provider store={store}>
      <Router>
       <Switch>
          <Route exact path="/" render={(props) => <Login />}/>
          <Route exact path="/sign-up" render={(props) => <SignUp/>}/>
          <Route exact path="/privacy-policy" render={(props) => <PrivacyPolicy />}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
