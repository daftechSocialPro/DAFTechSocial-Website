import React from 'react'
import './employees.css'
import {People,ArrowUpward} from '@material-ui/icons'
import PageHeader from '../../components/pageHeader/PageHeader'
export default function Employees() {
    return (
        <div className="employees">
            <PageHeader title="Employees" icon={<People/>} subtitle="List of Employees" icon2={<ArrowUpward/>}/>
               
              
        </div>
    )
}
