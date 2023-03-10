import React from 'react'
import './topbar.css'
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                    <img src="/assets/img/daflogo.jpg" alt=""  />
               
                        
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings/>
                       
                    </div>
                    <img src="/assets/img/daflogo.jpg" alt="" className="topAvator" />
                </div>
            </div>
        </div>
    )
}
