import Devices from "devices/Devices";
import Hello from "hello/Hello";
import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavigationBar />

          <Switch>
            <Route path="/devices">
              <Devices />
            </Route>
            <Route path="/hello">
              <Hello />
            </Route>

          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
