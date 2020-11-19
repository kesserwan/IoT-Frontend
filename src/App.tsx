import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HelpPage from "views/HelpPage";
import DevicePage from "views/DevicesPage";
import Data from "views/Data";
import GatewayPage from "views/GatewayPage";

function App() {
  return (
    <div className = "backgroundcolorchange">
      <Router>
        <div>
          <NavigationBar />
          <Switch>

            <Route path="/devicepage">
              <DevicePage />
            </Route>

            <Route path="/gatewaypage">
              <GatewayPage />
            </Route>

            <Route path="/data">
              <Data />
            </Route>

            <Route path="/helppage">
              <HelpPage />
            </Route>

          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
