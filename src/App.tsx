import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Devices from "devices/Devices";
import HelpPage from "Help/HelpPage";
import EnrollmentPage from "Enrollment/EnrollmentPage";

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

            <Route path="/help">
              <HelpPage />
            </Route>

            <Route path="/enrollment">
              <EnrollmentPage />
            </Route>

          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
