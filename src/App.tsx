import React, {useEffect} from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css';

import "./styles/index.scss"
import store from './store'
import PrivateRoute from "./routes/PrivateRoute"
import { loadUser } from './redux/actions/auth';
import { NetworkStatus } from './components';
import { Login, SignUp, PrivacyPolicy, ForgotPassword, ProgramReport, Overview, Programs, NewProgram, 
  Forms, FormBuild, FormPreview, PublishedForm, VerifyToken, Profile, ProfileEdit,FormEdit } from "./pages"

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
      <NetworkStatus/>
       <Switch>
          <Route exact path="/" render={(props) => <Login />}/>
          <Route exact path="/login" render={(props) => <Login />}/>
          <Route exact path="/verify-token/:accessToken" render={(props) => <VerifyToken />}/>
          <Route exact path="/sign-up" render={(props) => <SignUp/>}/>
          <Route exact path="/privacy-policy" render={(props) => <PrivacyPolicy />}/>
          <Route exact path="/forgot-password" render={(props) => <ForgotPassword />}/>
          <Route exact path="/form/:id" component={PublishedForm} />
          <PrivateRoute exact path="/app/dashboard" component={Overview}/>
          <PrivateRoute exact path="/app/programs" component={Programs}/>
          <PrivateRoute exact path="/app/new-program" component={NewProgram}/>
          <PrivateRoute exact path="/app/program-report/:id" component={ProgramReport}/>
          <PrivateRoute exact path="/app/forms" component={Forms} /> 
          <PrivateRoute exact path="/app/form-build" component={FormBuild} />
          <PrivateRoute exact path="/app/Form-edit/:id" component={FormEdit} />  
          <PrivateRoute exact path="/app/form/preview/:id" component={FormPreview} />
          <PrivateRoute exact path="/app/profile" component={Profile} />  
          <PrivateRoute exact path="/app/profile/edit" component={ProfileEdit} />
        </Switch>
      </Router>
    </Provider>
  );  
}

export default App;
