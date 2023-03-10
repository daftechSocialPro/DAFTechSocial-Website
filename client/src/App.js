import React from "react";

import Home from "./Pages/home";
import About from "./Pages/about";
import Project from "./Pages/Project/projects";
import Blog from "./Pages/Blog/blog";
import Header from "./Pages/layout/header";
import Footer from "./Pages/layout/footer";


import ProjectDetails from "./Pages/Project/projectDetails";
import BlogDetails from "./Pages/Blog/blogDetails";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Pages/contact";
import Sidebar from "./Pages/NewAdmin/components/sidebar/Sidebar";
import Topbar from "./Pages/NewAdmin/components/topbar/Topbar";
import AdminHome from "./Pages/NewAdmin/Pages/Home/Home";
import ContacMessage from "./Pages/NewAdmin/Pages/ContactMessage/contacMessage";
import './dashboard.css'
import Employees from "./Pages/NewAdmin/Pages/Employees/Employees";
import JobTitle from "./Pages/NewAdmin/Pages/Employees/employeeSettings/JobTitle/JobTitle";
import Dashboard from "./Pages/Admin/pages/Dashboard";
import Layout from "./Pages/Admin/components/layout/Layout";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route exact path="/#services">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/Project">
            <Header />
            <Project />
            <Footer />
          </Route>
          <Route exact path="/blog">
            <Header />
            <Blog />
            <Footer />
          </Route>
          <Route exact path="/single-blog">
            <Header />
            <BlogDetails />
            <Footer />
          </Route>
          <Route exact path="/single-projects:id">
            <Header />
            <ProjectDetails />
            <Footer />
          </Route>
          <Route exact path="/contactus">
            <Header />
            <Contact />
            <Footer />
          </Route>

          <Route path="/admin">
            <Topbar />

            <div className="container2">
              <Sidebar route="/admin" />

             
                  <Route exact path="/admin">
                  <Layout />
                  </Route>
                  <Route exact path="/admin/contact">
                    <ContacMessage />
                  </Route>
                  <Route exact path="/admin/employee">
                    <Employees />
                  </Route>
                  <Route exact path="/admin/employee/jobtitle">
                    <JobTitle />
                  </Route>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
