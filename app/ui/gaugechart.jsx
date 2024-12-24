import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import RevenueList from './lists';

const formatNumber = (num) => new Intl.NumberFormat('en-US').format(num);

export default function ArcDesign({ value = 50, width = 200, height = 200 }) {
  const initialValue = React.useRef(value); // مقدار ثابت برای جلوگیری از تفاوت

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="50%" stopColor="#ffff00" />
            <stop offset="100%" stopColor="#00ff00" />
          </linearGradient>
        </defs>
      </svg>
      <Gauge
        width={width}
        height={height}
        value={initialValue.current} // مقدار ایستا برای تطابق SSR و CSR
        cornerRadius="50%"
        sx={{
          [`& .${gaugeClasses.valueArc}`]: {
            fill: 'url(#gaugeGradient)',
          },
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
            fill: '#000',
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: '#e0e0e0',
          },
        }}
      />
      <div style={{ marginTop: 10 }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#666' }}>
          Value: {formatNumber(initialValue.current)}%
        </p>
        <RevenueList />
      </div>
    </div>
  );
}
