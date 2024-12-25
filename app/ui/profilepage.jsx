import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import AxisFormatter from './profilechart'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
export default function Profilepage() {
  return (
    <>
      <Box sx={{ fontSize: '30px', m: 5, borderBottom: '2px solid white', p: 5 }} >
        Profile
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly ', m: 5,  }}>
        <Typography className='w-full lg:w-3/12 flex flex-wrap items-center justify-center shadow-2xl border' component='article'>
          <p className='w-full text-center text-2xl m-2'>Profile detail</p>
          <figure className='w-full flex justify-center m-2'> 
          <Avatar
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/19550456"
            sx={{ width: 100 , height: 100  }}
          />
          </figure>
          <p className='text-center font-bold text-xl'>Admin <br />Team lead</p>
          <div className='*:m-2'>
          <Button variant="contained">Follow</Button>
          <Button variant="contained">Message</Button>
          </div>

        </Typography>
        <Typography className='w-full lg:w-8/12 flex justify-center items-center border shadow-2xl' component='div'>
          <AxisFormatter/>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly ', m: 5,}}>
        <Typography className='w-full lg:w-3/12 border shadow-2xl *:p-5 '>
          <p>Skills</p>
          <Typography className='flex flex-wrap text-sm *:border *:rounded-md *:bg-sky-400 *:p-2 '>
            <span>Html</span> 
            <span>javascript</span>
            <span>sass</span>
            <span>react</span>
            <span>nextjs</span>
          </Typography> 
        </Typography>

        <Typography className='flex flex-wrap justify-evenly w-full lg:w-8/12 shadow-2xl border *:w-full *:lg:w-4/12 *:shadow-2xl capitalize'>
          <Typography className='text-3xl *:m-5'>
            <span>$ 2.405</span>
            <AttachMoneyIcon fontSize='large'/>
            <p className='text-sm'>Total earning</p>
          </Typography>
          <Typography className='text-3xl *:m-5'>
            <span>30</span>
            <InventoryIcon fontSize='large'/>
            <p className='text-sm'>Orders Today</p>
          </Typography>
          <Typography className='text-3xl *:m-5'>
            <span>$ 1.224</span>
            <AttachMoneyIcon fontSize='large'/>
            <p className='text-sm'>Total Revenue</p>
          </Typography>
        </Typography>
      </Box>
    </>
  )
}
