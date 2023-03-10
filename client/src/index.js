import React from 'react';

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

import './dashboard.css'



import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './Pages/Admin/redux/reducers'

import './Pages/Admin/assets/boxicons-2.0.7/css/boxicons.min.css'
import './Pages/Admin/assets/css/grid.css'
import './Pages/Admin/assets/css/theme.css'
import './Pages/Admin/assets/css/index.css'

import Layout from './Pages/Admin/components/layout/Layout'

const store = createStore(
  rootReducer
)

document.title = 'Tua CRM'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
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

         

             
                  <Route exact path="/admin">
                  <Layout />
                  </Route>
                
           
         
        </Switch>
      </Router>
   
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
