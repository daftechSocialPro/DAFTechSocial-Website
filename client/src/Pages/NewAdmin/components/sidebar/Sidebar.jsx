import React from 'react'
import './sidebar.css'
import {LineStyle,Timeline,MailOutline} from '@material-ui/icons';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
export default function Sidebar({route}) {


  
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
            <Link to="/admin" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon"/>
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Employees</h3>
            <ul className="sidebarList">

              <Link to="/admin/employee" className="link">
              <li className="sidebarListItem ">
                <LineStyle className="sidebarIcon" />
                Employees
              </li>
              </Link>
              <ul className="sidebarList">
                <h3 className="sidebarTitle">Employee Settings</h3>
                <Link to="/admin/employee/jobtitle" className="link">

          
               <li className="sidebarListItem">
                 Job Title
               </li>
               </Link>
                </ul>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Projects</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem ">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon"/>
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Vaccancies</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem ">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon"/>
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Blog</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem ">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon"/>
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Messages</h3>
            <ul className="sidebarList">
            <Link to="/admin/contact" className="link">
              <li className="sidebarListItem">
              <MailOutline className="sidebarIcon"/>
                View Messages
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
}
