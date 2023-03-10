import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import Home from "../Pages/Home/Home";
import ContacMessage from "./ContactMessage/contacMessage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './dashboard.css'

const NDashbord =()=>{

    return (
      <div>
        <Topbar />

        <div className="container2">
          <Sidebar />

          <Router>
            <Switch>
              <Route exact path="/admin">
                <Home />
              </Route>
              <Route  path="/admin/contact">
                <ContacMessage />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
}

export default NDashbord