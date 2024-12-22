import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function OrdersPage() {
  return (
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Typography variant="h6">Order Management</Typography>
      <Typography>Here are your recent orders. Track and manage your purchases.</Typography>
    </Box>
  );
}

export default OrdersPage;
