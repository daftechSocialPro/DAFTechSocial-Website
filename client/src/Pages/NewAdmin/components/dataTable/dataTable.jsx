import React from 'react'
import './dataTable.css'
import {DataGrid} from '@material-ui/data-grid'
import {DeleteOutline} from '@material-ui/icons'
export default function DataTableView({results}) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'fullname', headerName: 'Full Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'message', headerName: 'Message', width: 300 },
        {
            field:'action',
            headerName:"Action",
            width:150,
            renderCell:(paramas)=>{
                    return (
                            <>
                        <button className='userListEdit'>Edit</button>
                             |
                            <DeleteOutline className="userListDelete"/>
                 </>
                    )
            }
        }
   
      ];


      const messages=[]
      console.log(results)
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
      const rows = messages
    return (
        <div className="datatable" >
             <DataGrid disableSelectionOnClick 
        rows={rows}
        columns={columns}
        pageSize={8}
        
        checkboxSelection
      />
        </div>
    )
}
