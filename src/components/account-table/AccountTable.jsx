import './AccountTable.scss'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './data';

  
const AccountTable = () => {


 
    
  return (
    <div className='data-table' style={{padding:'0px 20px', width:'100%'}}>
    <DataGrid
        className='data-grid'
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        style={{backgroundColor:'#fff'}}
      />
    </div>
  )
}

export default AccountTable