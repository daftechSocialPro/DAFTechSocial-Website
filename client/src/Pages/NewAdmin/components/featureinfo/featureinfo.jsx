import React from 'react'
import './featureinfo.css'
import {People ,ArrowDownward,ArrowUpward,MailOutline,AccountTree} from '@material-ui/icons'

export default function FeatureInfo() {
    return (
        <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Employees <People/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> 9</span>
          <span className="featuredMoneyRate">
            - 4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Projects <AccountTree/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">6 </span>
          <span className="featuredMoneyRate">
             +2 <ArrowUpward className="featuredIcon "/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Messages <MailOutline/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,225</span>
          <span className="featuredMoneyRate">
            +120 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
    )
}
