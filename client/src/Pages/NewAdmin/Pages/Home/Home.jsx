import React from 'react'
import Chart from '../../components/chart/chart'
import FeatureInfo from '../../components/featureinfo/featureinfo'
import WidgetSm from '../../components/widgetsSm/widgetSm'
import WidgetLg from '../../components/widgetLg/widgetLg'
import { ProjectData } from '../../Dummydata'

import './home.css'
export default function Home() {
    return (
        <div className="home">
            <FeatureInfo/>
            <Chart data={ProjectData} title="Project Analytics" grid dataKey="Active Projects" />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        
        </div>
    )
}
