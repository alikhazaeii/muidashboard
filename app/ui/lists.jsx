import React from 'react';
import Box from '@mui/material/Box';

const data = [
  { source: 'Social', revenue: 260, value: '+35%' },
  { source: 'Search Engines', revenue: 125, value: '-12%' },
  { source: 'Direct', revenue: 54, value: '+46%' },
  { source: 'Other', revenue: 146, value: '+24%' },
];

export default function RevenueList() {
  return (
    <Box component="ul" sx={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      <li style={{ fontWeight: 'bold', marginBottom: '10px' }} className='*:p-5'>
        <span style={{ display: 'inline-block', width: '30%' }}>Source</span>
        <span style={{ display: 'inline-block', width: '30%' }}>Revenue</span>
        <span style={{ display: 'inline-block', width: '30%' }}>Value</span>
      </li>
      {data.map((item, index) => (
        <li
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            padding: '5px 0',
            borderBottom: '1px solid #ddd',
          }}
        >
          <span style={{ display: 'inline-block', width: '30%' }}>{item.source}</span>
          <span style={{ display: 'inline-block', width: '30%' }}>{item.revenue}</span>
          <span
            style={{
              display: 'inline-block',
              width: '30%',
              color: item.value.startsWith('+') ? 'green' : 'red',
            }}
          >
            {item.value}
          </span>
        </li>
      ))}
    </Box>
  );
}
