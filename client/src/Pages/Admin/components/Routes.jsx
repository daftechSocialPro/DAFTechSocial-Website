import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Messages from '../pages/Messages'
const Routes = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/Messages' component={Messages}/>
        </Switch>
    )
}

export default Routes
