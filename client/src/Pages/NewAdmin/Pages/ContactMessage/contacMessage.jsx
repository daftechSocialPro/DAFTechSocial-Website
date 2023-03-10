import React,{useState,useEffect} from 'react'
import './contactMessage.css'
import axios from 'axios'
import {People ,ArrowDownward,ArrowUpward,MailOutline,AccountTree} from '@material-ui/icons'
import DataTableView from '../../components/dataTable/dataTable'
import PageHeader from '../../components/pageHeader/PageHeader'

export default function ContacMessage() {


    const url = 'http://localhost:2000/getContacts'
    const [results, setResult] = useState([])
 
        axios.get(url).then((response)=>{
            setResult(response.data)
        }); 
    

   

    return (
        <div className="contactMessage">
      <PageHeader title="Contact Messages" icon={<MailOutline/>} subtitle="List of Messages" icon2={<ArrowUpward/>}/>
               
                    
                   <DataTableView results={results}/>

        </div>
    )
}
