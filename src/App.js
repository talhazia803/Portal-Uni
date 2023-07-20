import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import store from "store";
import { useSelector } from "react-redux";
const App = () => {
  const { uid } = useSelector((state) => state.authUser);
  return (
    <BrowserRouter>
      {!uid ? (
        <Switch>
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Redirect from="/" to="/auth/firstPage" />
      </Switch>
      ) 
      // : (
      //   <Switch>
      //     <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      //     <Redirect from="/" to="/auth/login" />
      //   </Switch>
      // ) 
      : (
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
