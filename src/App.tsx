import React, { useState } from "react";
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
import HomePage from "views/HomePage";

/* 
      ^- ToDo Landing page -^ 
  -stats:
    -number of devices
    -number of gateways
    -connection types:
      -zigbee, wifi, etc

        ^- ToDo Devices -^
 -dynamically changing drop down menu
 -Text checks *later* :
    -all the forms have data in them
    -data is the correct length
    -convert user input into correct formatting (sd:as:vc:ve:34:v3)
 
      ^- ToDo Gateways -^   
      
      ^- ToDo Data -^ 
      -edit button (edit items directly)   
      -save
      -search function *later*

      ^- ToDo Help -^ 
      -keep up to date with changes
      -pictures *later*  
      
      ^-Overall-^
      -dark theme

 
*/

function App() {

  const [theme, setTheme] = useState("light");
  if(theme === "dark"){
    document.body.style.backgroundColor = "rgb(32, 29, 29)";
  }else{
    document.body.style.backgroundColor = "";
  }

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  }

  return (
    <div className = "backgroundcolorchange">
      <Router>
        <div>
          <NavigationBar activeTheme={theme} onThemeChange={handleThemeChange} />
          <Switch>

            <Route exact path="/">
              <HomePage activeTheme={theme} />
            </Route>

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
