import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import CustomizedBadges from './cart';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Button, IconButton } from '@mui/material';
import { Instagram, LinkedIn } from '@mui/icons-material';
import CachedIcon from '@mui/icons-material/Cached';
import SmsIcon from '@mui/icons-material/Sms';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import BasicLineChart from './linechart';
import ArcDesign from './gaugechart';


function DashboardPage() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  return (
    <>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'end' }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <LinkedIn />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <Instagram />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >

          </IconButton>
        </Box>
        <CustomizedBadges />


        <Stack direction="row" spacing={1} sx={{ mx: 5 }} >
          <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/19550456" />
        </Stack>

      </Box>
      <Box sx={{ borderBottom: '1px solid white', mx: 4, p: 4, display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
        <Typography variant="h5"> Dashboard! <br />
          <p>Wellcome we`ve missed you</p>
        </Typography>
        <Typography sx={{ m: 2 }} className='*:mx-2'>
          <SmsIcon />
          <CachedIcon />
          <Button variant="contained">
            today:April 29</Button>
        </Typography>
      </Box >
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          gap={2}
          sx={{
            justifyContent: 'space-evenly',
            py: 2,

          }}
        >
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <div className='w-full capitalize text-start *:p-2'>
                <h3 className='text-xl'>sales today</h3>
                <h2 className='text-2xl'>2.563</h2>
                <p className='flex *:p-1'>
                  <span className='text-green-800 rounded-md bg-green-500'>+28% </span>
                  <span className='text-gray-600'>since last month</span>
                </p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <div className='w-full capitalize text-start *:p-2'>
                <h3 className='text-xl'>Visitors</h3>
                <h2 className='text-2xl'>170.212</h2>
                <p className='flex *:p-1'>
                  <span className='text-red-800 rounded-md bg-red-400'>-14% </span>
                  <span className='text-gray-600'>since last month</span>
                </p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>
              <div className='w-full capitalize text-start *:p-2'>
                <h3 className='text-xl'>Total Earnings</h3>
                <h2 className='text-2xl'>$ 24.300</h2>
                <p className='flex *:p-1'>
                  <span className='text-green-800 rounded-md bg-green-500'>+18% </span>
                  <span className='text-gray-600'>since last month</span>
                </p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Item>  <div className='w-full capitalize text-start *:p-2'>
              <h3 className='text-xl'>Pending Order</h3>
              <h2 className='text-2xl'>45</h2>
              <p className='flex *:p-1'>
                <span className='text-red-800 rounded-md bg-red-400'>+18% </span>
                <span className='text-gray-600'>since last month</span>
              </p>
            </div></Item>
          </Grid>
        </Grid>
      </Box>
          <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
            <Typography className='w-full lg:w-8/12 overflow-hidden'  component='div'>
            <BasicLineChart/>
            </Typography>
            <Typography className='w-full lg:w-4/12 flex justify-center items-center' component='div' >
              <ArcDesign />
            </Typography>
          </Box>
    </>


  );
}

export default DashboardPage;
