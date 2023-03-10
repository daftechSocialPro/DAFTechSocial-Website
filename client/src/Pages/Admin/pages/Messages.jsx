

import Table from '../components/table/Table'
import React , { useState,useEffect } from 'react'
import axios from 'axios'
const url = 'http://localhost:2000/getContacts'


const customerTableHead = [
    '#',
    'Full Name',
    'Email',
    'Message',
 
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index++}>
     <td>{item.id}</td>
        <td>{item.fullname}</td>
        <td>{item.email}</td>
        <td>{item.message}</td>
    </tr>
)






export default function Messages() {
    const [results, setresults]=useState([])
    axios.get(url).then((response)=>{
        setresults(response.data)
    }); 



    const messages=[]
 
    let i=1;
    results.map((val,key )=>{
  
      var k ={
        id:i,
        fullname:val.fullname,
        email:val.email,
        message:val.message
      }
      i++;
      messages.push(k)
    
  })
  console.log(messages)

    return (
        <div>
        <h2 className="page-header">
            Messages
        </h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <Table
                            limit='10'
                            headData={customerTableHead}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={messages}
                            renderBody={(item, index) => renderBody(item, index)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}






