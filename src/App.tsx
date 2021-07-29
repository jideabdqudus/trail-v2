import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Imports
import 'antd/dist/antd.css'
import "./styles/index.scss"
import store from './store'
import {Login} from "./pages"


function App() {
  return (
    <Provider store={store}>
      <Router>
       <Switch>
            <Route exact path="/" render={(props) => <Login />}/>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
