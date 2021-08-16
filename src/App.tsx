import React,{useEffect} from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Imports
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css';
import "./styles/index.scss"
import store from './store'
import {Login, SignUp, PrivacyPolicy, ForgotPassword, Overview, Programs, NewProgram} from "./pages"
import PrivateRoute from "./routes/PrivateRoute"
import { loadUser } from './actions/authActions';

const App:React.FC=()=> {
  useEffect(() => {
    if (localStorage.getItem("id")){
      store.dispatch(loadUser());
    }
  });
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
          <PrivateRoute exact path="/app/programs" component={Programs}/>
          <PrivateRoute exact path="/app/new-program" component={NewProgram}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
