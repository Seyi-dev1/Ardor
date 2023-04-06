import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './transactionsTable.scss'

export const columns = [
  { field: 'id', headerName: 'Transaction Id', width: 230,  headerClassName: 'headerclass', },
  {
    field: 'date',
    headerClassName: 'headerclass',
    headerName: 'Date',
    width: 170,
  },
  {
    field: 'time',
    headerClassName: 'headerclass',
    headerName: 'Time',
    width: 160,
  },
  {
    field: 'category',
    headerClassName: 'headerclass',
    headerName: 'Category',
    width: 190,
  },
  {
    field: 'amount',
    headerClassName: 'headerclass',
    headerName: 'Amount',
    width: 190,
  },
  {
    field: 'status',
    headerClassName: 'headerclass',
    headerName: 'Status',
    width: 150,
  },
];


export  const rows = [
  { id: '#122351', date: '03|04|23', time:'19:30', category: 'withdrawal', amount:'$2000', status:'pending' },
  { id: '#234575', date: '01|04|23', time:'13:00', category: 'deposit', amount:'$3000', status:'success' },
  { id: '#243567', date: '30|03|23', time:'14:30', category: 'deposit', amount:'$2500', status:'success' },
  { id: '#124363', date: '30|03|23', time:'14:23', category: 'withdrawal', amount:'$700', status:'success' },
  { id: '#231426', date: '26|03|23', time:'09:47', category: 'transfer', amount:'$280', status:'declined' },
  { id: '#1324WQ', date: '25|03|23', time:'18:17', category: 'deposit', amount:'$4200', status:'success' },
  { id: '#64T4UH', date: '20|03|23', time:'20:51', category: 'deposit', amount:'$2000', status:'success' },
  { id: '#WK34RT', date: '20|03|23', time:'20:30', category: 'withdrawal', amount:'$500', status:'success' },
  { id: '#004JKQ', date: '19|03|23', time:'11:33', category: 'deposit', amount:'$7000', status:'success' },
  { id: '#40LX3P', date: '18|04|23', time:'16:44', category: 'transfer', amount:'$360', status:'declined' },
  { id: '#BN74S2', date: '12|03|23', time:'18:20', category: 'deposit', amount:'$1800', status:'success' },
  { id: '#KQW362', date: '03|003|23', time:'21:09', category: 'deposit', amount:'$200', status:'success' },
  { id: '#FF3410', date: '01|03|23', time:'15:27', category: 'withdrawal', amount:'$150', status:'success' },
  { id: '#1RT378', date: '25|02|23', time:'17:10', category: 'deposit', amount:'$720', status:'success' },
  { id: '#490377', date: '23|02|23', time:'09:29', category: 'deposit', amount:'$1500', status:'success' },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}
    rowsPerPageOptions={[8]}>
      <DataGrid className='table'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        rowsPerPageOptions={[8]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
