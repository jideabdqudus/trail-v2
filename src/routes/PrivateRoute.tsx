import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { IAuthenticate } from '../type.d'


interface Props {
  component: any;
  path?: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<Props> = ({component: Component,...rest
})  =>  {
  const {isAuthenticated, loading} = useSelector((state: IAuthenticate) => state.auth)
  return(
  <Route
    {...rest}
    render={(props) => {
      if (loading) {
        return <div className="loader">Loading...</div>
      } else if (!isAuthenticated) {
        return <Redirect to="/" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
  )
  };
export default PrivateRoute;
