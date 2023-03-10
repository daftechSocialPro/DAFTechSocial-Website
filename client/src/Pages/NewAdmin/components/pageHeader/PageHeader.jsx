import React from 'react'
import './pageHeader.css'


export default function PageHeader({title,subtitle,icon,length,icon2,number}) {
    return (
      <div className="featuredItem">
        <span className="featuredTitle">
          {title} {icon} 
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{length} </span>
          <span className="featuredMoneyRate">
            {number} <div  className="featuredIcon" >
                {icon2}
                </div>
          </span>
        </div>
        <span className="featuredSub">{subtitle}</span>
      </div>
    );
}
