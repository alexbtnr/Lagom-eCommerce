import React from "react";
import Homepage from "./pages/Homepage";
import "./styles/app.scss";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import UserAuthentication from "./pages/UserAuthentication";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/authentication' component={UserAuthentication} />
      </Switch>
    </div>
  );
}

export default App;
