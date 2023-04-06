import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './transactionsTable.scss'



export default function TransactionsTable() {

  const columns = [
    { id: 'number', label: 'Transaction Number', minWidth: 170 },
    { id: 'date', label: 'Date', minWidth: 170 },
    { id: 'category', label: 'Category', minWidth: 100 },
    {
      id: 'amount',
      label: 'Amount',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 170,
      align: 'right',
      renderCell:(params)=><div className="statusCell" style={{color:'red'}}><h1 style={{color:'red'}}>{params.row.status}</h1></div>
    },
  ];


  function createData(number, date, category, amount, status) {
    return { number, date, category, amount, status };
  }



  const rows = [
    createData('#28456100', '18:24 020223', 'withdrawal', '$2000', 'approved' ),
    createData('#75632102', '18:24 020223', 'transfer', '$300', 'declined'),
    createData('#09837651', 'withdrawal', '$200', 301340),
    createData('#99072653', 'withdrawal', '$400', 9833520),
    createData('#30648710', 'deposit', '$300', 9984670),
    createData('#82029941', 'deposit', '$1000', 7692024),
    createData('#30734099', 'withdrawal', '$380', 357578),
    createData('#31205572', 'deposit', '$550', 70273),
    createData('#37748711', 'transfer','$50', 1972550),
    createData('#00659463', 'withdrawal', '$250', 377973),
    createData('#30762517', 'deposit', '$2000', 640679),
    createData('#87730062', 'withdrawal', '$420', 242495),
    createData('27105425', 'tramsfer', '$150', 17098246),
    createData('#24141415', 'deposit', '$500', 923768),
    createData('#16173245', 'deposit', '$500', 8515767),
  ];




  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="dataTable">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 540, width:'100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color:column.color }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 8, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{  width:'100%', '.MuiTablePagination-toolbar': {
        width: 'fitContent', 
        height: '35px',
      },
 }}
      />
    </Paper>
    </div>
    
  );
}