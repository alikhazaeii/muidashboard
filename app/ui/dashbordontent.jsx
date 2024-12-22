import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function DashboardPage() {
  return (
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Typography variant="h6">Welcome to the Dashboard!</Typography>
      <Typography>Here you can view important metrics and activities.</Typography>
    </Box>
  );
}

export default DashboardPage;
