import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Devices from "devices/Devices";

//

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

          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
