import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DataTable from './datatable';
function OrdersPage() {
  return (
   <>
    <Box sx={{ py: 4, display: 'flex', mx: 5, justifyContent:'space-between', borderBottom:'1px solid white' }} >
      <Typography variant="h6">Order Management</Typography>
      <Button variant="contained" color='primary' sx={{display:'flex', justifyContent:'center' , alignItems:'center'}} className='*:mx-2
       capitalize'> 
        <AddIcon/>
        new order</Button>
    </Box>
    <Box sx={{m:2}}>
      <DataTable/>
    </Box>
   </>
  );
}

export default OrdersPage;
