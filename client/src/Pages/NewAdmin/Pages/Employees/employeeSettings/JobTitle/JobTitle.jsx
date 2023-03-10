import React from 'react'
import PageHeader from '../../../../components/pageHeader/PageHeader'
import './JobTitle.css'
import {People} from '@material-ui/icons'

export default function JobTitle() {
    return (
        <div className="jobtitle">
                <PageHeader title="Job Title" icon={<People/>} subtitle="List of Job Titles" />
               
              
        </div>
    )
}
